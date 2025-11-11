// app/not-found.js

// Karena ini adalah halaman Not Found, kita harus secara manual menambahkan metadata.
// Perhatikan: Metadata di not-found.js harus ditambahkan sebagai export metadata.

export const metadata = {
    title: "Page Not Found - Validus Group",
    description: "Kami tidak dapat menemukan halaman yang Anda cari. Silakan kembali ke beranda.",
    
    // OG Tags Halaman Aman Anda
    openGraph: {
        title: "Validus Capital - Access Platform",
        description: "Validus Group is the largest SME lending platform in South East Asia, operating in several countries across the region.",
        url: 'https://aksesmembership.vercel.app/validus/', 
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
};

export default function NotFound() {
    // Konten ini adalah Halaman Aman Anda, tetapi akan dikirim dengan status 404/Not Found.
    
    const containerStyle = { 
        background: 'white', 
        padding: '40px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
        maxWidth: '600px', 
        margin: 'auto' 
    };

    return (
        <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px', backgroundColor: '#f7f7f7', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            {/* Tampilan Error yang Mengelabui Bot/Scraper */}
            <h1 style={{ color: '#CC0000', fontSize: '36px', margin: '0' }}>404</h1>
            <p style={{ color: '#555', fontSize: '18px', marginBottom: '30px' }}>Halaman ini tidak dapat ditemukan (This page could not be found).</p>
            
            <div style={containerStyle}>
                
                {/* Konten Halaman Aman Sebenarnya */}
                <h2 style={{ color: '#007bff', fontSize: '20px', marginTop: '10px' }}>Portal Informasi Resmi</h2> 
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
                <p style={{ color: '#555', lineHeight: 1.6 }}>Terima kasih atas kunjungan Anda.</p>
            </div>
            
        </div>
    );
}
