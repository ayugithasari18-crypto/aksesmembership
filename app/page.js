// app/page.js
// -----------------------------------------------------------
// Bagian 1: Metadata (OG Tags Minimal untuk Diagnostik)
// -----------------------------------------------------------
export const metadata = {
  title: "Validus Diagnostik | Root Path Check",
  description: "Halaman ini menunjukkan bahwa root path berhasil di-render.",
  // Kita hilangkan OG image dan detail lain sementara
};

// -----------------------------------------------------------
// Bagian 2: Komponen React Minimal
// -----------------------------------------------------------
export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      textAlign: 'center', 
      padding: '50px', 
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: 'green' }}>✅ Next.js Root Path Berhasil Dirender</h1>
      <p style={{ color: '#333' }}>
        Jika Anda melihat halaman ini di https://aksesmembership.vercel.app/, 
        berarti konfigurasi routing dasar Next.js dan middleware Anda untuk root path sudah benar.
      </p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Langkah selanjutnya: Kembalikan konten Halaman Aman secara bertahap
        dan periksa Log Vercel untuk kesalahan rendering (SSR Error).
      </p>
    </div>
  );
}
