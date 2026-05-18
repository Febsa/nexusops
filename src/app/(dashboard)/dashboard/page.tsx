import React from "react";
import { DollarSign, Activity, Package, Smartphone, ShieldCheck, Calendar, MapPin, Filter } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      
      {/* Bagian Header Dashboard */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-[#1f2937] p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
        <div>
          <h1 className="text-2xl font-extrabold text-gdn-text-main dark:text-white mb-1">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gdn-text-muted">
            Monitoring performance & distribution analysis.
          </p>
        </div>

        {/* Filter Buttons (Simulasi) */}
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gdn-text-main dark:text-gray-300 hover:border-gdn-blue transition-colors">
            <span>05/03/2026</span>
            <Calendar size={16} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gdn-text-main dark:text-gray-300 hover:border-gdn-blue transition-colors">
            <Calendar size={16} />
            <span>2026</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gdn-text-main dark:text-gray-300 hover:border-gdn-blue transition-colors">
            <MapPin size={16} />
            <span>All Areas</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gdn-text-main dark:text-gray-300 hover:border-gdn-blue transition-colors">
            <Filter size={16} />
            <span>All Categories</span>
          </button>
        </div>
      </div>

      {/* Bagian Kartu Ringkasan (Summary Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Revenue */}
        <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
              <DollarSign size={24} />
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md flex items-center gap-1">
              <Activity size={12} /> +12%
            </span>
          </div>
          <p className="text-sm font-medium text-gdn-text-muted mb-1">Total Revenue</p>
          <h2 className="text-3xl font-extrabold text-gdn-text-main dark:text-white">Rp 26 M</h2>
        </div>

        {/* Card 2: Sales Achv */}
        <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="p-3 bg-orange-50 dark:bg-orange-900/30 text-gdn-orange inline-block rounded-xl mb-4">
            <Activity size={24} />
          </div>
          <div className="flex justify-between items-end mb-2">
            <p className="text-sm font-medium text-gdn-text-muted">Sales Achv.</p>
            <div className="text-right">
              <span className="text-sm font-bold text-gdn-text-main dark:text-white">81% /</span>
              <span className="text-xs text-gdn-text-muted block">100%</span>
            </div>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 mt-2">
            <div className="bg-gdn-blue h-2.5 rounded-full" style={{ width: '81%' }}></div>
          </div>
        </div>

        {/* Card 3: Units Sold */}
        <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="p-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 inline-block rounded-xl mb-4">
            <Package size={24} />
          </div>
          <p className="text-sm font-medium text-gdn-text-muted mb-1">Units Sold</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-extrabold text-gdn-text-main dark:text-white">2.170</h2>
            <span className="text-sm text-gdn-text-muted font-medium">Unit</span>
          </div>
        </div>

        {/* Card 4: Asuransi Cermati */}
        <div className="bg-white dark:bg-[#1f2937] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="p-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 inline-block rounded-xl mb-4">
            <ShieldCheck size={24} />
          </div>
          <p className="text-sm font-medium text-gdn-text-muted mb-1">Asuransi Cermati</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-extrabold text-gdn-text-main dark:text-white">825</h2>
            <span className="text-sm text-gdn-text-muted font-medium">Klaim</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}