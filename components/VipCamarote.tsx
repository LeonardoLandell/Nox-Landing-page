import Image from "next/image";

export default function VipCamarotes() {
  return (
    <section className="py-20 bg-blackAbsolute text-softWhite">
      <h2 className="text-4xl font-bold font-orbitron text-neonPurple mb-16 text-center">
        Experiência VIP Exclusiva
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        {/* Entrada VIP */}
        <div className="flex flex-col items-center text-center p-8 bg-black/50 rounded-xl shadow-lg hover:shadow-electricBlue/40 transition">
          <Image
            src="/images/entrada-vip.png"
            alt="Entrada exclusiva VIP"
            width={600}
            height={400}
            className="rounded-xl mb-6 w-full object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
          <h3 className="text-2xl font-semibold font-orbitron text-neonPurple mb-4">
            Entrada Exclusiva
          </h3>
          <p className="text-gray-300">
            Acesso rápido e reservado para quem vive a noite com estilo e
            exclusividade.
          </p>
        </div>

        {/* Serviços Premium */}
        <div className="flex flex-col items-center text-center p-8 bg-black/50 rounded-xl shadow-lg hover:shadow-electricBlue/40 transition">
          <Image
            src="/images/serviços.png"
            alt="Serviços premium para VIPs"
            width={600}
            height={400}
            className="rounded-xl mb-6 w-full object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
          <h3 className="text-2xl font-semibold font-orbitron text-neonPurple mb-4">
            Serviços Premium
          </h3>
          <p className="text-gray-300">
            Drinks artesanais, champagne e gastronomia refinada para uma
            experiência única.
          </p>
        </div>

        {/* Vista do Camarote */}
        <div className="flex flex-col items-center text-center p-8 bg-black/50 rounded-xl shadow-lg hover:shadow-electricBlue/40 transition">
          <Image
            src="/images/camarote.png"
            alt="Vista privilegiada do camarote VIP"
            width={600}
            height={400}
            className="rounded-xl mb-6 w-full object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
          <h3 className="text-2xl font-semibold font-orbitron text-neonPurple mb-4">
            Vista Privilegiada
          </h3>
          <p className="text-gray-300">
            Desfrute da melhor vista da festa com conforto e exclusividade no
            camarote VIP.
          </p>
        </div>
      </div>
    </section>
  );
}
