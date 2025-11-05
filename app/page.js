// app/page.js
// Bagian ini menangani SEMUA Meta Tags, OG Tags, dan Judul Halaman
export const metadata = {
  title: "Validus Capital | Akses Platform",
  description: "Akses portal, cek rekening terbaru, dan lakukan pembayaran QRIS di sini.",
  
  // Open Graph (OG) Tags untuk WhatsApp & Facebook
  openGraph: {
    title: "Validus Capital - Access Platform",
    description: "Validus Group is the largest SME lending platform in South East Asia, operating in several countries across the region.",
    url: 'https://aksesmembership.vercel.app/validus/',
    siteName: 'Validus Capital',
    images: [
      {
        url: 'https://validusgrp.com/wp-content/uploads/2022/04/validus-capital-logo-red.png', 
        width: 1200, 
        height: 630,
        alt: 'Validus Capital Logo Red',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  
  // Twitter Card Tags
  twitter: {
    card: 'summary_large_image',
    title: 'Validus Capital - Access Platform',
    description: 'Validus Group is the largest SME lending platform in South East Asia, operating in several countries across the region.',
    images: ['https://validusgrp.com/wp-content/uploads/2022/04/validus-capital-logo-red.png'],
  },
};

// Isi minimal untuk file app/page.js (Komponen Utama)
export default function Home() {
  return (
    // Anda bisa mengembalikan konten Halaman Aman di sini, atau null jika Anda hanya ingin meta tag
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px', backgroundColor: '#f7f7f7' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '600px', margin: 'auto' }}>
             {/* Konten Halaman Aman, misalnya: "Validus Group adalah platform..." */}
             <h1>Selamat Datang di Validus Group</h1>
             <p>Informasi lebih lanjut akan tersedia di platform kami.</p>
        </div>
    </div>
  );
}
