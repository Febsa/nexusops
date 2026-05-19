"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  LayoutDashboard,
  Wallet,
  CreditCard,
  ShieldCheck,
  Truck,
  AlertOctagon,
  Gift,
  Sun,
  Moon,
  LogOut,
  X,
  Users,       // Ikon untuk Salesman Performance
  Box,         // Ikon untuk Product Info
  Search,      // Ikon untuk Check Coverage
  Settings,    // Ikon untuk Settings
  Headset      // Ikon untuk Customer Support
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  // State untuk Dropdown Menu
  const [isSalesOpsOpen, setIsSalesOpsOpen] = useState(true);
  const [isProductOpen, setIsProductOpen] = useState(true);
  
  // State untuk Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Inisialisasi Dark Mode
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Data Menu Sales Ops
  const salesOpsMenu = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Cashback", href: "/cashback", icon: Wallet },
    { name: "MDR", href: "/mdr", icon: CreditCard },
    { name: "Cermati", href: "/cermati", icon: ShieldCheck },
    { name: "Shipment", href: "/shipment", icon: Truck },
    { name: "DOA", href: "/doa", icon: AlertOctagon },
    { name: "Loyalty", href: "/loyalti", icon: Gift },
    { name: "Salesman Perf.", href: "/salesman-performance", icon: Users },
  ];

  // Data Menu Product
  const productMenu = [
    { name: "Product Info", href: "/product-info", icon: Box },
    { name: "Check Coverage", href: "/check-coverage", icon: Search },
  ];

  return (
    <>
      {/* Overlay untuk Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gdn-dark-blue border-r border-gray-100 dark:border-gray-800 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header: Logo & Tombol Close (Mobile) */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/GDN_Cleaned.png"
              alt="GDN Logo"
              width={100}
              height={30}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-gdn-text-main dark:text-white leading-none">
                NexusOps
              </span>
              <span className="text-[10px] text-gdn-text-muted">Tools GDNi</span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gdn-orange"
          >
            <X size={24} />
          </button>
        </div>

        {/* Info Pengguna (Current Session) */}
        {/* Ditambahkan border-b di bawah blok ini sebagai garis tegas pemisah dengan area menu */}
        <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <div className="bg-gdn-input-bg dark:bg-[#1f2937] p-4 rounded-xl border border-gray-100 dark:border-gray-700">
            <p className="text-xs font-semibold text-gdn-text-muted mb-1 uppercase tracking-wider">
              Current Session
            </p>
            <h3 className="font-bold text-gdn-text-main dark:text-white text-lg">
              Febsa
            </h3>
            <span className="inline-block mt-1 px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-md">
              Sales Admin Ops
            </span>
          </div>
        </div>

        {/* Area Menu Navigasi (Bisa di-scroll) */}
        <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
          
          {/* Menu Kategori 1: SALES OPS */}
          <div className="mb-4">
            <button
              onClick={() => setIsSalesOpsOpen(!isSalesOpsOpen)}
              className="w-full flex items-center justify-between px-2 py-2 text-xs font-bold text-gdn-text-muted uppercase tracking-wider hover:text-gdn-blue transition-colors"
            >
              <span>Sales Ops</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${isSalesOpsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu Sales Ops */}
            <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${isSalesOpsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              {salesOpsMenu.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all
                      ${isActive 
                        ? "bg-gdn-blue text-white shadow-md shadow-gdn-blue/20" 
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gdn-blue dark:hover:text-gdn-blue"
                      }
                    `}
                  >
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Menu Kategori 2: PRODUCT */}
          <div className="mb-2">
            <button
              onClick={() => setIsProductOpen(!isProductOpen)}
              className="w-full flex items-center justify-between px-2 py-2 text-xs font-bold text-gdn-text-muted uppercase tracking-wider hover:text-gdn-blue transition-colors"
            >
              <span>Product</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${isProductOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu Product */}
            <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${isProductOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              {productMenu.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all
                      ${isActive 
                        ? "bg-gdn-blue text-white shadow-md shadow-gdn-blue/20" 
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gdn-blue dark:hover:text-gdn-blue"
                      }
                    `}
                  >
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer Sidebar (Theme, Settings, Support & Logout) */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 space-y-1">
          
          {/* Toggle Theme (Night Mode) */}
          <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gdn-input-bg dark:bg-[#1f2937] mb-3">
            <span className="text-sm font-medium text-gdn-text-main dark:text-gray-300">
              Appearance
            </span>
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-lg text-gdn-orange hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Menu Settings */}
          <Link href="/settings" className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gdn-blue dark:hover:text-gdn-blue rounded-xl font-medium transition-colors">
            <Settings size={20} />
            <span className="text-sm">Settings</span>
          </Link>

          {/* Menu Customer Support */}
          <Link href="/support" className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gdn-blue dark:hover:text-gdn-blue rounded-xl font-medium transition-colors">
            <Headset size={20} />
            <span className="text-sm">Support</span>
          </Link>

          {/* Tombol Logout (Diberi margin atas tambahan agar terpisah dari menu lainnya) */}
          <button className="w-full flex items-center gap-3 px-4 py-2.5 mt-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-medium transition-colors">
            <LogOut size={20} />
            <span className="text-sm font-bold">Sign Out</span>
          </button>
          
        </div>
      </aside>
    </>
  );
}