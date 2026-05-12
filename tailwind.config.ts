import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Mengaktifkan dark mode berbasis class
  theme: {
    extend: {
      colors: {
        // Palet Warna Kustom Sesuai Desain
        "gdn-dark-blue": "#0f172a", // Latar belakang kiri / Mode gelap kanan
        "gdn-blue": "#2596be",      // Tombol default / Teks aksen
        "gdn-orange": "#f9bc19",    // Aksen teks / Tombol hover
        "gdn-text-main": "#1f2937",  // Teks utama form (light mode)
        "gdn-input-bg": "#f9fafb",  // Latar belakang input (light mode)
        "gdn-text-muted": "#9ca3af", // Teks footer/ikon
      },
      backgroundImage: {
        "gdn-left-gradient": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;