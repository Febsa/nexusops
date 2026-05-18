"use client"; // Diperlukan karena kita menggunakan interaksi klik

import Image from "next/image";
import { useState } from "react";
// Impor ikon dari pustaka lucide-react (opsional, jika Anda belum menginstalnya)
// Untuk kesederhanaan, saya akan menggunakan ikon SVG kustom untuk ikon profil

export default function LoginForm() {
  // State sederhana untuk mendemonstrasikan night mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-[#1f2937] p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 relative">
      
      {/* Ikon Mode Malam (Kanan Atas) */}
      <button 
        onClick={toggleDarkMode}
        className="absolute top-6 right-6 p-2 rounded-full text-gdn-text-muted hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {isDarkMode ? (
          // Ikon Matahari untuk beralih ke Light Mode
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        ) : (
          // Ikon Bulan (Default) untuk beralih ke Dark Mode
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        )}
      </button>

      {/* Logo GDN (image_1.png) */}
      <div className="flex flex-col items-center justify-center mb-10">
        <Image 
          src="/assets/GDN_Cleaned.png" 
          alt="GDN - Global Danapati Niaga Logo" 
          width={180} // Sesuaikan lebar logo agar terlihat pas
          height={60} 
          className="mb-6 object-contain"
          priority
        />
        <h3 className="text-3xl font-extrabold text-gdn-text-main dark:text-white">NexusOps</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Masuk untuk mengakses Dashboard Utama</p>
      </div>

      {/* Form Input */}
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gdn-text-main dark:text-gray-300 mb-2">
            Email
          </label>
          <div className="relative">
            {/* Ikon Profil Kosong */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gdn-text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="nama@gdn3.com" 
              required
              className="w-full pl-12 pr-4 py-3 bg-gdn-input-bg dark:bg-[#374151] border border-gray-100 dark:border-gray-700 rounded-xl text-gdn-text-main dark:text-white placeholder:text-gdn-text-muted dark:placeholder:text-gray-500 focus:ring-2 focus:ring-gdn-blue/50 focus:border-gdn-blue outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-gdn-text-main dark:text-gray-300 mb-2">
            Password
          </label>
          <div className="relative">
            {/* Ikon Gembok */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gdn-text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="........" 
              required
              className="w-full pl-12 pr-4 py-3 bg-gdn-input-bg dark:bg-[#374151] border border-gray-100 dark:border-gray-700 rounded-xl text-gdn-text-main dark:text-white placeholder:text-gdn-text-muted dark:placeholder:text-gray-500 focus:ring-2 focus:ring-gdn-blue/50 focus:border-gdn-blue outline-none transition-all"
            />
          </div>
        </div>

        {/* Tombol Login Interaktif (Sesuai Permintaan 4) */}
        <button 
          type="submit" 
          className="w-full py-3.5 rounded-xl text-white font-bold text-lg transition-all shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-gdn-blue hover:shadow-lg active:scale-[0.98]
            bg-gdn-blue hover:bg-gdn-orange 
            dark:bg-gdn-orange dark:hover:bg-gdn-blue"
        >
          Sign In
        </button>
      </form>

      {/* Footer Hak Cipta (Permintaan 3 & Sesuai Gambar) */}
      <footer className="mt-12 text-center text-[11px] text-gdn-text-muted dark:text-gray-500 space-y-1">
        <p>&copy; 2026 PT Global Danapati Niaga. All rights reserved.</p>
        <p className="font-semibold tracking-wider">DESIGNED & DEVELOPED BY FEBSA ADI RIANSYAH</p>
      </footer>
    </div>
  );
}