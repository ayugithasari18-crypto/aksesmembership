// app/layout.js
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        
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
