"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ força abrir sempre no topo
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      style={{ y: yParallax }}
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-6xl font-extrabold text-white tracking-tight drop-shadow-lg"
      >
        NOX <br />
        Onde a noite mais exclusiva da cidade começa aqui!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 mt-6 text-2xl text-gray-200 max-w-2xl leading-relaxed"
      >
        Eventos unicos, Pessoas seletas, Experiências inesqueciveis.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 mt-10 flex gap-6"
      >
        <a href="#banners">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
            Garantir Ingressos
          </Button>
        </a>
        <a href="#banners">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
            Seja Vip
          </Button>
        </a>
      </motion.div>
    </motion.section>
  );
}
