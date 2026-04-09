"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Localizacao() {
  return (
    <section
      id="localizacao"
      className="relative min-h-screen py-20 flex flex-col items-center bg-black text-white"
    >
      <h2 className="text-4xl font-bold font-orbitron text-neonPurple mb-8 text-center">
        Localização Exclusiva
      </h2>

      <p className="text-softWhite font-poppins text-center max-w-2xl mb-12">
        No coração de São Paulo, na icônica Rua Augusta — o epicentro da vida
        noturna e da cultura urbana.
      </p>

      {/* Mapa estilizado fictício */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl h-96 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl shadow-lg flex items-center justify-center"
      >
        <FaMapMarkerAlt className="text-pink-500 text-6xl animate-bounce" />
        <span className="ml-4 text-lg text-gray-300">
          Rua Augusta, Centro de São Paulo
        </span>
      </motion.div>
    </section>
  );
}
