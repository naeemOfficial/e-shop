import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Flash from "@/components/Flash";
import MoreProducts from "@/components/MoreProducts";
import OurProduct from "@/components/OurProduct";
import OurServices from "@/components/OurServices";
import Save from "@/components/Save";
import Startups from "@/components/Startups";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Save/>
      <Feature/>
      <Flash/>
      <MoreProducts/>
      <OurProduct/>
      <OurServices/>
      <Startups/>
      <Team/>
    </main>
  );
}
