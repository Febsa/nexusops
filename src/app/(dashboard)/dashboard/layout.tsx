"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // State untuk mengontrol Sidebar di tampilan Mobile/Tablet
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gdn-input-bg dark:bg-[#111827] overflow-hidden">
      
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Topbar khusus untuk Mobile/Tablet (muncul hanya jika di layar kecil) */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-gdn-dark-blue border-b border-gray-100 dark:border-gray-800">
          <div className="font-extrabold text-lg text-gdn-text-main dark:text-white">
            NexusOps
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gdn-text-main dark:text-white hover:text-gdn-blue"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Area di mana halaman seperti Dashboard, Cashback, dll akan di-render */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
        
      </div>
    </div>
  );
}