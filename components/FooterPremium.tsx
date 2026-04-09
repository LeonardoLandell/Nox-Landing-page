"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function FooterPremium() {
  return (
    <footer className="bg-blackAbsolute text-softWhite py-12 flex flex-col items-center">
      <div className="text-3xl font-extrabold font-orbitron text-neonPurple mb-6">
        NOX Festival
      </div>

      <div className="flex gap-6 mb-6">
        <a href="#" className="hover:text-electricBlue transition">
          Instagram
        </a>
        <a href="#" className="hover:text-electricBlue transition">
          Facebook
        </a>
        <a href="#" className="hover:text-electricBlue transition">
          Twitter
        </a>
      </div>

      <p className="text-softWhite font-poppins text-center max-w-lg">
        “Mais que música, uma experiência que redefine o luxo e a imersão.”
      </p>
    </footer>
  );
}
