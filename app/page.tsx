import Hero from "@/components/hero";
import Banners from "@/components/Banners";
import ExperienciaNox from "@/components/ExperienciaNox";
import VipCamarotes from "@/components/VipCamarote";
import GaleriaImersiva from "@/components/GaleriaImersiva";
import LineUpsBar from "@/components/LineUpsBar";
import ListaVip from "@/components/ListaVip";
import Localizacao from "@/components/Localizacao";
import FooterPremium from "@/components/FooterPremium";

export default function Page() {
  return (
    <main>
      <Hero />
      <Banners />
      <ExperienciaNox />
      <VipCamarotes />
      <GaleriaImersiva />
      <LineUpsBar />
      <ListaVip />
      <Localizacao />
      <FooterPremium />
    </main>
  );
}
