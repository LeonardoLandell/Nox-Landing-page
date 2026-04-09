import "./globals.css";
import { Orbitron, Poppins } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import type { ReactNode } from "react";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "NOX Festival",
  description: "Landing page premium imersiva",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${orbitron.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
