"use client";

import React, { useState } from "react";
import { 
  DollarSign, 
  Target, 
  Package, 
  ShieldCheck, 
  CheckCircle, 
  MapPin, 
  Building, 
  Smartphone 
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from "recharts";

// --- MOCK DATA UNTUK DEMO GRAFIK ---
const trendData = [
  { name: "Jan", sales: 12000, target: 10000 },
  { name: "Feb", sales: 19000, target: 15000 },
  { name: "Mar", sales: 15000, target: 16000 },
  { name: "Apr", sales: 22000, target: 18000 },
  { name: "May", sales: 28000, target: 24000 },
  { name: "Jun", sales: 26000, target: 25000 },
];

const categoryData = [
  { name: "iPhone 13", value: 45 },
  { name: "MacBook Air M4", value: 25 },
  { name: "iPad Pro", value: 20 },
  { name: "Accessories", value: 10 },
];

const PIE_COLORS = ["#2596be", "#f97316", "#8b5cf6", "#10b981"];

export default function DashboardPage() {
  // State untuk filter (Simulasi interaksi)
  const [selectedRegion, setSelectedRegion] = useState("");
  
  return (
    <div className="space-y-6">
      
      {/* 1. HEADER & SUBTITLE */}
      <div>
        <h1 className="text-2xl font-extrabold text-gdn-text-main dark:text-white mb-1">
          Dashboard GDNi
        </h1>
        <p className="text-[13px] text-gdn-text-muted font-medium">
          Real-time analytics of sales performance, regional distribution, and product coverage.
        </p>
      </div>

      {/* 2. FILTER AREA (Tanggal, Region, Depo, Kategori) */}
      <div className="bg-white dark:bg-[#1f2937] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-wrap gap-3 items-center">
        
        {/* Date Picker (Bawaan HTML5, otomatis jadi kalender saat diklik) */}
        <div className="relative flex-1 min-w-[150px]">
          <input 
            type="date" 
            className="w-full px-3 py-2 text-[13px] font-medium bg-gdn-input-bg dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gdn-text-main dark:text-gray-300 focus:outline-none focus:border-gdn-blue"
          />
        </div>

        {/* Dropdown Region */}
        <div className="relative flex-1 min-w-[150px]">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
            <MapPin size={14} />
          </div>
          <select 
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-[13px] font-medium bg-gdn-input-bg dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gdn-text-main dark:text-gray-300 appearance-none focus:outline-none focus:border-gdn-blue"
          >
            <option value="">All Regions</option>
            <option value="jabodetabek">Jabodetabek</option>
            <option value="jabar">Jawa Barat</option>
            <option value="jatim">Jawa Timur</option>
          </select>
        </div>

        {/* Dropdown Depo (Bergantung pada Region secara konsep) */}
        <div className="relative flex-1 min-w-[150px]">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
            <Building size={14} />
          </div>
          <select 
            disabled={!selectedRegion} // Hanya aktif jika region dipilih (efek UI)
            className="w-full pl-9 pr-3 py-2 text-[13px] font-medium bg-gdn-input-bg dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gdn-text-main dark:text-gray-300 appearance-none focus:outline-none focus:border-gdn-blue disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">Select Depo</option>
            <option value="depo-jkt-1">Depo Jakarta Pusat</option>
            <option value="depo-jkt-2">Depo Jakarta Selatan</option>
          </select>
        </div>

        {/* Dropdown Kategori Barang */}
        <div className="relative flex-1 min-w-[150px]">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
            <Smartphone size={14} />
          </div>
          <select className="w-full pl-9 pr-3 py-2 text-[13px] font-medium bg-gdn-input-bg dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gdn-text-main dark:text-gray-300 appearance-none focus:outline-none focus:border-gdn-blue">
            <option value="">All Categories</option>
            <option value="iphone13">iPhone 13</option>
            <option value="macbookm4">MacBook Air M4</option>
            <option value="ipad">iPad Pro</option>
          </select>
        </div>
      </div>

      {/* 3. COMPACT SUMMARY CARDS (5 Kolom di Desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Card: Total Sell Thru */}
        <div className="bg-white dark:bg-[#1f2937] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[11px] font-extrabold text-gdn-text-muted uppercase tracking-wider">Total Sell-Thru</p>
            <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
              <DollarSign size={16} />
            </div>
          </div>
          <h2 className="text-xl font-extrabold text-gdn-text-main dark:text-white">Rp 45.2 M</h2>
        </div>

        {/* Card: Progress Achv */}
        <div className="bg-white dark:bg-[#1f2937] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[11px] font-extrabold text-gdn-text-muted uppercase tracking-wider">Achievement</p>
            <div className="p-1.5 bg-orange-50 dark:bg-orange-900/30 text-gdn-orange rounded-lg">
              <Target size={16} />
            </div>
          </div>
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-extrabold text-gdn-text-main dark:text-white">85%</h2>
            <span className="text-[10px] text-gdn-text-muted font-bold">vs 100% Target</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mt-2">
            <div className="bg-gdn-orange h-1.5 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        {/* Card: Qty Sold */}
        <div className="bg-white dark:bg-[#1f2937] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[11px] font-extrabold text-gdn-text-muted uppercase tracking-wider">Qty Sold</p>
            <div className="p-1.5 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
              <Package size={16} />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <h2 className="text-xl font-extrabold text-gdn-text-main dark:text-white">3,450</h2>
            <span className="text-[11px] text-gdn-text-muted font-bold">Units</span>
          </div>
        </div>

        {/* Card: Asuransi Cermati */}
        <div className="bg-white dark:bg-[#1f2937] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[11px] font-extrabold text-gdn-text-muted uppercase tracking-wider">Cermati (Act)</p>
            <div className="p-1.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
              <ShieldCheck size={16} />
            </div>
          </div>
          <h2 className="text-xl font-extrabold text-gdn-text-main dark:text-white">1,240</h2>
        </div>

        {/* Card: Total Coverage */}
        <div className="bg-white dark:bg-[#1f2937] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[11px] font-extrabold text-gdn-text-muted uppercase tracking-wider">Coverage (Act)</p>
            <div className="p-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
              <CheckCircle size={16} />
            </div>
          </div>
          <h2 className="text-xl font-extrabold text-gdn-text-main dark:text-white">980</h2>
        </div>

      </div>

      {/* 4. AREA GRAFIK (CHARTS) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Line Chart: Trend Penjualan (Memakan 2 Kolom) */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1f2937] p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <h3 className="text-[14px] font-extrabold text-gdn-text-main dark:text-white mb-4">
            Sales Trend & Target Achievement (2026)
          </h3>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#1f2937' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Line type="monotone" dataKey="sales" name="Actual Sales" stroke="#2596be" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="target" name="Target" stroke="#f97316" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart: Distribusi Kategori (Memakan 1 Kolom) */}
        <div className="bg-white dark:bg-[#1f2937] p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <h3 className="text-[14px] font-extrabold text-gdn-text-main dark:text-white mb-4">
            Top Categories Share
          </h3>
          <div className="h-[280px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="45%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}