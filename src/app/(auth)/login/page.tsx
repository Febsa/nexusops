import LoginForm from "@/components/auth/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | NexusOps",
  description: "Selamat datang di NexusOps. Pusat kendali operasional BliBli OMG.",
};

export default function LoginPage() {
  return (
    // Struktur responsif: Kolom bertumpuk untuk mobile (flex-col), berdampingan untuk desktop (lg:flex-row)
    <main className="flex min-h-screen flex-col lg:flex-row bg-white dark:bg-gdn-dark-blue">
      
      {/* --- BAGIAN KIRI (Desktop) / BAGIAN ATAS (Mobile) --- */}
      <div className="lg:w-1/2 flex flex-col items-start justify-center p-8 md:p-16 lg:p-24 bg-gdn-dark-blue bg-gdn-left-gradient from-gdn-dark-blue to-[#111827]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8">
          Data <span className="text-gdn-orange">Driven</span>
          <br />
          <span className="text-gdn-blue">Decisions.</span>
        </h1>

        <div className="border-l-4 border-gdn-orange pl-6 py-1">
          <h2 className="text-xl font-bold text-white mb-1">NexusOps</h2>
          {/* Deskripsi profesional dalam bahasa Inggris sesuai permintaan */}
          <p className="text-base text-gray-300 max-w-lg leading-relaxed">
            Centralized Control Center for streamlining supply chain operations, optimizes IMEI validation processes, and provides precise promotor incentive tracking.
          </p>
        </div>
      </div>

      {/* --- BAGIAN KANAN (Form Login) --- */}
      <div className="lg:w-1/2 w-full flex-grow flex items-center justify-center p-8 md:p-12">
        <LoginForm />
      </div>
    </main>
  );
}