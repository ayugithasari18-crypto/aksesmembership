// app/page.js
// Repositori: aksesmembership

// -----------------------------------------------------------
// Bagian 1: Metadata (OG Tags, Judul Halaman)
// Ini adalah cara Next.js membaca tag <head> Anda.
// -----------------------------------------------------------
export const metadata = {
    title: "Validus Group - Access Platform",
    description: "Akses portal, cek rekening terbaru, dan lakukan pembayaran QRIS di sini.",
    
    // Open Graph (OG) Tags untuk WhatsApp & Facebook
    openGraph: {
        title: "Validus Capital - Access Platform",
        description: "Validus Group is the largest SME lending platform in South East Asia, operating in several countries across the region.",
        url: 'https://aksesmembership.vercel.app/validus/', // URL yang digunakan untuk debugging
        images: [
            {
                url: 'https://validusgrp.com/wp-content/uploads/2022/04/validus-capital-logo-red.png', 
                width: 1200, 
                height: 630,
                alt: 'Validus Capital Logo Red',
            },
        ],
        type: 'website',
    },
    // Jika Anda ingin Twitter Card Tags, tambahkan di sini juga.
};

// -----------------------------------------------------------
// Bagian 2: Komponen React (Merender Konten Halaman Aman)
// Merender HTML yang Anda inginkan (style diubah menjadi inline CSS atau objek style)
// -----------------------------------------------------------
export default function Home() {
    // Definisi gaya CSS (dari tag <style> Anda)
    const containerStyle = { 
        background: 'white', 
        padding: '40px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
        maxWidth: '600px', 
        margin: 'auto' 
    };

    return (
        <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px', backgroundColor: '#f7f7f7' }}>
            <div style={containerStyle}>
                <h1 style={{ color: '#007bff' }}>Portal Informasi Resmi</h1> 
                <img 
                    src="https://hokiterushokiselalu.sgp1.cdn.digitaloceanspaces.com/Master/2024/eb61d3b2-4896-4c1c-921b-cdcb430fed24.webp" 
                    alt="Akses Platform Resmi Anggota" 
                    style={{ 
                        maxWidth: '100%', 
                        height: 'auto', 
                        marginTop: '20px', 
                        borderRadius: '4px' 
                    }}
                />
                <p style={{ color: '#555', lineHeight: 1.6 }}>Anda telah mengunjungi portal informasi anggota terverifikasi.</p>
                <p style={{ color: '#555', lineHeight: 1.6 }}>Halaman ini didedikasikan untuk memastikan Anda mendapatkan informasi yang sah dan terpercaya mengenai akses platform.</p>
                <p style={{ color: '#555', lineHeight: 1.6 }}>Terima kasih atas kunjungan Anda.</p>
            </div>
        </div>
    );
}
