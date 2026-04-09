"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const date = new Date(targetDate);
    const interval = setInterval(() => {
      const now = new Date();
      const diff = date.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("O evento começou!");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export default function Banners() {
  const countdown1 = useCountdown("2026-07-31T20:00:00");
  const countdown2 = useCountdown("2026-08-15T22:00:00");
  const countdown3 = useCountdown("2026-09-05T21:00:00");

  const banners = [
    {
      id: 1,
      title: "NOX Festival São Paulo",
      countdown: countdown1,
      link: "/pagamento",
      image: "/images/nox-sp.jpg",
    },
    {
      id: 2,
      title: "NOX Experience Rio",
      countdown: countdown2,
      link: "/pagamento",
      image: "/images/nox-flo.jpg",
    },
    {
      id: 3,
      title: "NOX Sunset Florianópolis",
      countdown: countdown3,
      link: "/pagamento",
      image: "/images/nox-rio.jpg",
    },
  ];

  return (
    <section
      id="banners"
      className="relative min-h-screen py-20 flex flex-col items-center bg-blackAbsolute text-softWhite"
    >
      <h2 className="text-4xl font-bold font-orbitron text-neonPurple mb-16 text-center">
        Próximos Eventos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl px-6">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="flex flex-col items-center text-center p-8 bg-black/50 rounded-xl shadow-lg hover:shadow-electricBlue/40 transition"
          >
            {/* Imagem otimizada pelo Next.js */}
            <Image
              src={banner.image}
              alt={banner.title}
              width={600}
              height={400}
              className="rounded-xl mb-6 w-full object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
            />

            <h3 className="text-2xl font-semibold font-orbitron text-neonPurple mb-6">
              {banner.title}
            </h3>

            <div className="text-electricBlue font-orbitron text-xl mb-8">
              {banner.countdown}
            </div>

            <a
              href={banner.link}
              className="bg-neonPurple hover:bg-electricBlue text-softWhite px-6 py-3 rounded-full font-bold shadow-lg text-lg transition-colors duration-300"
            >
              Garantir Ingresso
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
