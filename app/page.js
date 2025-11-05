// app/page.js
// Repositori: aksesmembership

// -----------------------------------------------------------
// Bagian 1: Metadata (OG Tags, Judul Halaman)
// Next.js akan membaca bagian ini untuk mengisi tag <head>
// -----------------------------------------------------------
export const metadata = {
    title: "Validus Group - Access Platform",
    description: "Akses portal, cek rekening terbaru, dan lakukan pembayaran QRIS di sini.",
    
    // Open Graph (OG) Tags untuk WhatsApp & Facebook
    openGraph: {
        title: "Validus Group: Portal Akses Resmi dan Terverifikasi",
        description: "Sistem Akses Cepat dan Aman. Cek Update Rekening Terbaru Anda secara Realtime di Platform Resmi Validus Group.",
        url: 'https://aksesmembership.vercel.app/validus/',
        siteName: 'Validus Group',
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
    
    // Twitter Card Tags
    twitter: {
        card: 'summary_large_image',
        title: 'Validus Group: Portal Akses Resmi dan Terverifikasi',
        description: 'Sistem Akses Cepat dan Aman. Cek Update Rekening Terbaru Anda secara Realtime di Platform Resmi Validus Group.',
        images: ['https://validusgrp.com/wp-content/uploads/2022/04/validus-capital-logo-red.png'],
    },
};

// -----------------------------------------------------------
// Bagian 2: Komponen React (Merender Konten Halaman Aman)
// -----------------------------------------------------------
export default function Home() {
    return (
        // Kode HTML Anda diubah menjadi JSX dan Inline CSS
        <div style={{
            fontFamily: 'sans-serif', 
            textAlign: 'center', 
            padding: '20px', 
            backgroundColor: '#f7f7f7'
        }}>
            <div style={{
                background: 'white', 
                padding: '40px', 
                borderRadius: '8px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
                maxWidth: '600px', 
                margin: 'auto'
            }}>
                <p style={{color: 'green', fontSize: '14px', marginBottom: '15px'}}><span style={{marginRight: '5px'}}>🔒</span>**Koneksi Aman, Transaksi Dilindungi.**</p>
                <h1 style={{ color: '#cc0000', fontSize: '24px' }}>Portal Informasi Resmi</h1>
                
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
                
                <p style={{color: '#555', marginTop: '20px'}}>Anda telah mengunjungi portal informasi anggota terverifikasi.</p>
                <p style={{color: '#555'}}>Halaman ini didedikasikan untuk memastikan Anda mendapatkan informasi yang sah dan terpercaya mengenai akses platform.</p>
                <p style={{color: '#555'}}>Terima kasih atas kunjungan Anda.</p>
            </div>
        </div>
    );
}
