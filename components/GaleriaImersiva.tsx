"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GaleriaImersiva() {
  const images = [
    "/images/1-gal.png",
    "/images/gal2.png",
    "/images/gal3.png",
    "/images/gal4.png",
    "/images/gal5.png",
    "/images/gal6.png",
    "/images/gal7.png",
    "/images/gal8.png",
  ];

  return (
    <section className="py-20 bg-blackAbsolute text-softWhite">
      <h2 className="text-4xl font-bold font-orbitron text-neonPurple mb-12 text-center">
        Galeria Imersiva
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-electricBlue/40 transition-all duration-300"
          >
            <Image
              src={src}
              alt={`Foto da galeria ${index + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-softWhite text-sm font-medium">
                Noite inesquecível na pista da NOX
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
