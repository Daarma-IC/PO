import React, { useState } from 'react';

// --- Komponen untuk Halaman Pre-Order (Diletakkan di dalam fail yang sama) ---
const PreOrderPage = ({ onBack }) => {
  return (
    <div className="preorder-container">
      <button onClick={onBack} className="back-button">
        &larr; Kembali
      </button>
      <div className="form-card">
        <h1 className="form-title">Formulir Pendaftaran</h1>
        <p className="form-subtitle">
          Isi data di bawah untuk menyelesaikan pendaftaran Anda.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); alert('Pendaftaran Terkirim!'); }}>
          <div className="input-group">
            <label htmlFor="name">Nama Lengkap</label>
            <input type="text" id="name" placeholder="Masukkan nama Anda" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Alamat Email</label>
            <input type="email" id="email" placeholder="contoh@email.com" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Nomor Telepon</label>
            <input type="tel" id="phone" placeholder="08123456789" required />
          </div>
          <button type="submit" className="submit-button">
            Kirim Pendaftaran
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Komponen untuk Halaman Utama (Diletakkan di dalam fail yang sama) ---
const HomePage = ({ onNavigate }) => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1 className="homepage-title">Pilih Jenis Registrasi</h1>
        <p className="homepage-subtitle">
          Daftar sebagai merchant atau daftarkan kartu RFID baru.
        </p>
      </header>

      <div className="widget-container">
        {/* Card 1: Daftar Toko */}
        <div className="widget-card widget-card--store" onClick={() => onNavigate('form')}>
          <div className="widget-icon widget-icon--store">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A2.25 2.25 0 0011.25 11.25H10.5a2.25 2.25 0 00-2.25 2.25V21M3 7.5l6.75-5.25a.75.75 0 01.9,0L21 7.5M3 7.5v11.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V7.5M3 7.5h18" />
            </svg>
          </div>
          <h2 className="widget-title">Daftar Toko</h2>
          <p className="widget-description">
            Daftarkan toko/warung Anda sebagai merchant untuk menerima pembayaran RFID.
          </p>
        </div>

        {/* Card 2: Daftar Kartu */}
        <div className="widget-card widget-card--card" onClick={() => onNavigate('form')}>
          <div className="widget-icon widget-icon--card">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.5 3.75h17.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm16.5-5.25h.008v.008h-.008v-.008z" />
            </svg>
          </div>
          <h2 className="widget-title">Daftar Kartu</h2>
          <p className="widget-description">
            Daftarkan kartu RFID baru untuk pengguna dengan saldo awal dan PIN.
          </p>
        </div>
      </div>
      
      <p className="login-prompt">
        Sudah memiliki akun merchant? <a href="#">Masuk di sini</a>
      </p>
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #f0f2f5; 
          color: #333;
          overflow: hidden;
        }

        .App {
          text-align: center;
          position: relative;
          width: 100vw;
          height: 100vh;
        }

        .page-container {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
          transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
        }

        .page-container.hidden {
          opacity: 0;
          transform: scale(0.97);
          pointer-events: none;
        }

        .page-container.visible {
          opacity: 1;
          transform: scale(1);
        }
        
        /* --- HOMEPAGE STYLES --- */
        .homepage-container {
            max-width: 800px;
        }

        .homepage-header {
          margin-bottom: 40px;
        }

        .homepage-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 8px 0;
        }

        .homepage-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 550px;
          margin: 0 auto;
        }

        .widget-container {
            display: flex;
            justify-content: center;
            gap: 24px;
            margin-bottom: 24px;
        }

        .widget-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 32px;
          width: 320px;
          cursor: pointer;
          border: 1px solid #e2e8f0;
          transition: all 0.25s ease;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05);
        }
        
        .widget-card--store:hover {
          transform: translateY(-4px);
          border-color: #22c55e;
          box-shadow: 0 10px 15px -3px rgba(34,197,94,0.1), 0 4px 6px -4px rgba(34,197,94,0.1);
        }

        .widget-card--card:hover {
          transform: translateY(-4px);
          border-color: #3b82f6;
          box-shadow: 0 10px 15px -3px rgba(59,130,246,0.1), 0 4px 6px -4px rgba(59,130,246,0.1);
        }

        .widget-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 20px auto;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .widget-icon--store {
          background-color: #dcfce7;
          color: #22c55e;
        }

        .widget-icon--card {
          background-color: #dbeafe;
          color: #3b82f6;
        }

        .widget-icon svg {
          width: 28px;
          height: 28px;
        }

        .widget-title {
  _        font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: #1e293b;
        }

        .widget-description {
          color: #64748b;
          line-height: 1.6;
          font-size: 1rem;
          margin: 0;
        }
        
        .login-prompt {
          color: #64748b;
          font-size: 1rem;
        }

        .login-prompt a {
          color: #3b82f6;
          font-weight: 500;
          text-decoration: none;
        }

        .login-prompt a:hover {
          text-decoration: underline;
        }

        /* --- PRE-ORDER PAGE STYLES --- */
        .preorder-container {
          width: 100%;
          max-width: 500px;
          position: relative;
        }

        .back-button {
          position: absolute;
          top: -20px;
          left: 0px;
          background: none;
          border: none;
          color: #6b7280;
          font-size: 1rem;
          cursor: pointer;
          transition: color 0.2s ease;
          z-index: 10;
        }

        .back-button:hover {
          color: #111827;
        }

        .form-card {
          background-color: #ffffff;
          padding: 40px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          width: 100%;
          box-sizing: border-box;
          box-shadow: 0 10px 25px rgba(0,0,0,0.07);
        }

        .form-title {
          text-align: left;
          margin: 0 0 5px 0;
          font-size: 2rem;
          color: #111827;
        }

        .form-subtitle {
          text-align: left;
          margin: 0 0 30px 0;
          color: #6b7280;
        }

        .input-group {
          margin-bottom: 20px;
          text-align: left;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
        }

        .input-group input,
        .input-group select {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          background-color: #f9fafb;
          color: #111827;
          font-size: 1rem;
          box-sizing: border-box;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-group input:focus,
        .input-group select:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .input-group input::placeholder {
          color: #9ca3af;
        }

        .submit-button {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 8px;
          background-color: #3b82f6;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .submit-button:hover {
          background-color: #2563eb;
          transform: translateY(-2px);
        }
       `}</style>
      
      <div className={`page-container ${currentPage === 'home' ? 'visible' : 'hidden'}`}>
        <HomePage onNavigate={navigateTo} />
      </div>
      <div className={`page-container ${currentPage === 'form' ? 'visible' : 'hidden'}`}>
        <PreOrderPage onBack={() => navigateTo('home')} />
      </div>
    </div>
  );
}

export default App;

