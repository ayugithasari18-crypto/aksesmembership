// app/page.js
// -----------------------------------------------------------
// Bagian 1: Metadata (Untuk OG Tags & SEO)
// Next.js akan membaca bagian ini untuk mengisi tag <head>
// -----------------------------------------------------------
export const metadata = {
    title: "Validus Group - Access Platform",
    description: "Akses portal, cek rekening terbaru, dan lakukan pembayaran QRIS di sini.",
    
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
    // ... (Tambahkan Twitter metadata jika perlu)
};

// -----------------------------------------------------------
// Bagian 2: Komponen React (Merender Konten HTML Anda)
// Kode ini akan merender Safe Page saat middleware me-rewrite ke '/'
// -----------------------------------------------------------
export default function Home() {
    return (
        // Kode HTML Anda diubah menjadi JSX di sini
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
                <p style={{color: 'green', fontSize: '14px', marginBottom: '15px'}}><span style={{marginRight: '5px'}}>🔒</span>Koneksi Aman, Transaksi Dilindungi.</p>
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

// Catatan: Karena Anda sudah mengatur <style> di kode HTML Anda, saya mengubahnya menjadi inline CSS.
