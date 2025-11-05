// app/layout.js
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
    <title>Validus Group | Akses Portal Resmi</title>
<meta name="description" content="Akses cepat dan aman ke platform dan informasi rekening terbaru dari Validus Group.">

<meta property="og:title" content="Validus Group: Portal Akses Resmi dan Terverifikasi" />
<meta property="og:description" content="Sistem Akses Cepat dan Aman. Cek Update Rekening Terbaru Anda secara Realtime di Platform Resmi Validus Group." />
<meta property="og:image" content="https://validusgrp.com/wp-content/uploads/2022/04/validus-capital-logo-red.png" />
<meta property="og:url" content="https://aksesmembership.vercel.app/validus/" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="https://aksesmembership.vercel.app/validus/" />
        
        {/* SCRIPT GOOGLE ANALYTICS (GTAG) */}
        {/* Script pertama (async src) dimuat di awal */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-XSQEZVSDCG"
          strategy="afterInteractive" // Memuat setelah halaman utama selesai
        />

        {/* Script kedua (konfigurasi) dimuat inline */}
        <Script 
          id="google-analytics-config" 
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XSQEZVSDCG');
          `}
        </Script>
        
      </head>
      <body>{children}</body>
    </html>
  );
}
