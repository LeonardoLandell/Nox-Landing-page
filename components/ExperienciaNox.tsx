"use client";
import { motion } from "framer-motion";
import { FaHeadphonesAlt, FaGlobeAmericas, FaBuilding } from "react-icons/fa";

const items = [
  {
    id: 1,
    icon: <FaHeadphonesAlt className="text-pink-500 text-5xl" />,
    title: "Ambiente Imersivo",
    text: "Som, luz e energia que envolvem todos os sentidos.",
  },
  {
    id: 2,
    icon: <FaGlobeAmericas className="text-indigo-500 text-5xl" />,
    title: "DJ's Internacionais",
    text: "Line-up com artistas renomados do cenário mundial.",
  },
  {
    id: 3,
    icon: <FaBuilding className="text-yellow-500 text-5xl" />,
    title: "Estruturas de Luxo",
    text: "Conforto premium em cada detalhe do evento.",
  },
];

export default function ExperienciaNox() {
  return (
    <section
      id="experiencia"
      className="relative min-h-screen py-20 flex flex-col items-center bg-black/70 backdrop-blur-sm"
    >
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        A Experiência NOX
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl px-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-8 bg-black/50 rounded-xl shadow-lg hover:shadow-pink-500/40 transition"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mb-6"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-4">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
