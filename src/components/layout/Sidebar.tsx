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
  Users,
  Box,
  Search,
  Settings,
  Headset
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const [isSalesOpsOpen, setIsSalesOpsOpen] = useState(true);
  const [isProductOpen, setIsProductOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const productMenu = [
    { name: "Product Info", href: "/product-info", icon: Box },
    { name: "Check Coverage", href: "/check-coverage", icon: Search },
  ];

  return (
    <>
      {/* Overlay Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-white dark:bg-gdn-dark-blue border-r border-gray-100 dark:border-gray-800 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header Logo */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/GDN_Cleaned.png"
              alt="GDN Logo"
              width={90}
              height={28}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-[15px] text-gdn-text-main dark:text-white leading-tight">
                NexusOps
              </span>
              <span className="text-[10px] text-gdn-text-muted leading-tight">Tools GDNi</span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gdn-orange p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Current Session (Diperkecil) */}
        <div className="px-4 py-4 border-b border-gray-100 dark:border-gray-800">
          <div className="bg-gdn-input-bg dark:bg-[#1f2937] p-3 rounded-lg border border-gray-100 dark:border-gray-700">
            <p className="text-[10px] font-bold text-gdn-text-muted mb-0.5 uppercase tracking-wide">
              Current Session
            </p>
            <h3 className="font-extrabold text-gdn-text-main dark:text-white text-sm">
              Febsa
            </h3>
            <span className="inline-block mt-1 px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-[10px] font-bold rounded">
              Sales Admin Ops
            </span>
          </div>
        </div>

        {/* Navigasi Utama */}
        <div className="flex-1 overflow-y-auto px-3 py-3 custom-scrollbar">
          
          {/* Menu Kategori 1: SALES OPS */}
          <div className="mb-3">
            <button
              onClick={() => setIsSalesOpsOpen(!isSalesOpsOpen)}
              className="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-extrabold text-gdn-text-muted uppercase tracking-wider hover:text-gdn-blue transition-colors"
            >
              <span>Sales Ops</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${isSalesOpsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div className={`mt-1 space-y-0.5 overflow-hidden transition-all duration-300 ${isSalesOpsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              {salesOpsMenu.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md font-semibold text-[13px] transition-all
                      ${isActive 
                        ? "bg-gdn-blue text-white shadow-sm" 
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gdn-blue dark:hover:text-gdn-blue"
                      }
                    `}
                  >
                    <item.icon size={16} />
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
              className="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-extrabold text-gdn-text-muted uppercase tracking-wider hover:text-gdn-blue transition-colors"
            >
              <span>Product</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${isProductOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div className={`mt-1 space-y-0.5 overflow-hidden transition-all duration-300 ${isProductOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              {productMenu.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md font-semibold text-[13px] transition-all
                      ${isActive 
                        ? "bg-gdn-blue text-white shadow-sm" 
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gdn-blue dark:hover:text-gdn-blue"
                      }
                    `}
                  >
                    <item.icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer Sidebar (Diperkecil dan dirapikan) */}
        <div className="p-3 border-t border-gray-100 dark:border-gray-800 space-y-1">
          
          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-gdn-input-bg dark:bg-[#1f2937] mb-2">
            <span className="text-[13px] font-semibold text-gdn-text-main dark:text-gray-300">
              Appearance
            </span>
            <button
              onClick={toggleDarkMode}
              className="p-1 rounded text-gdn-orange hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <Link href="/settings" className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gdn-blue dark:hover:text-gdn-blue rounded-md font-semibold transition-colors">
            <Settings size={18} />
            <span className="text-[13px]">Settings</span>
          </Link>

          <Link href="/support" className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gdn-blue dark:hover:text-gdn-blue rounded-md font-semibold transition-colors">
            <Headset size={18} />
            <span className="text-[13px]">Support</span>
          </Link>

          <button className="w-full flex items-center gap-3 px-3 py-2 mt-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md font-bold transition-colors">
            <LogOut size={18} />
            <span className="text-[13px]">Sign Out</span>
          </button>
          
        </div>
      </aside>
    </>
  );
}