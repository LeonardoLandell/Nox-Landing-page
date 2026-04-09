"use client";
import { motion } from "framer-motion";

export default function ListaVip() {
  return (
    <section
      id="listavip"
      className="relative min-h-screen py-20 flex flex-col items-center bg-black/80 backdrop-blur-sm"
    >
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Lista VIP
      </h2>

      <p className="text-gray-300 text-center max-w-2xl mb-12">
        Acessos antecipados, benefícios exclusivos, brindes e experiências
        únicas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl px-6 w-full">
        {/* Formulário VIP */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 bg-black/50 p-8 rounded-xl shadow-lg"
        >
          <label className="flex flex-col text-gray-200">
            Nome
            <input
              type="text"
              placeholder="Seu nome completo"
              className="mt-2 p-3 rounded-md bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-pink-500"
            />
          </label>

          <label className="flex flex-col text-gray-200">
            Email
            <input
              type="email"
              placeholder="seu@email.com"
              className="mt-2 p-3 rounded-md bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-pink-500"
            />
          </label>

          <label className="flex flex-col text-gray-200">
            WhatsApp
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              className="mt-2 p-3 rounded-md bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-pink-500"
            />
          </label>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-bold shadow-lg"
          >
            Entrar na Lista VIP
          </motion.button>
        </motion.form>

        {/* Copy Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center text-center p-8 bg-black/50 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-pink-400 mb-6">
            Benefícios Exclusivos
          </h3>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li>✔ Acessos antecipados</li>
            <li>✔ Experiências únicas</li>
            <li>✔ Brindes especiais</li>
            <li>✔ Networking premium</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
