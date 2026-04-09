"use client";
import { motion } from "framer-motion";

const lineups = [
  "DJ Aurora",
  "MC Vortex",
  "DJ Skyline",
  "MC Pulse",
  "DJ Mirage",
];

const drinks = [
  "Champagne Dom Pérignon",
  "Whisky Macallan 18y",
  "Gin Tanqueray Nº Ten",
  "Vodka Belvedere",
  "Coquetel Signature NOX",
];

export default function LineUpsBar() {
  return (
    <section
      id="lineupsbar"
      className="relative min-h-screen py-20 flex flex-col items-center bg-black/80 backdrop-blur-sm"
    >
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        Line-ups & Bar Premium
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl px-6">
        {/* Card Line-ups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 bg-black/50 rounded-xl shadow-lg hover:shadow-pink-500/40 transition"
        >
          <h3 className="text-2xl font-semibold text-pink-400 mb-6 text-center">
            Line-up Exclusivo
          </h3>
          <ul className="space-y-3 text-gray-300 text-lg">
            {lineups.map((artist, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="hover:text-white transition"
              >
                {artist}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Card Bebidas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 bg-black/50 rounded-xl shadow-lg hover:shadow-indigo-500/40 transition"
        >
          <h3 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">
            Bar Premium
          </h3>
          <ul className="space-y-3 text-gray-300 text-lg">
            {drinks.map((drink, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="hover:text-white transition"
              >
                {drink}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
