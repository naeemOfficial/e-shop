import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Flash from "@/components/Flash";
import MoreProducts from "@/components/MoreProducts";
import Save from "@/components/Save";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Save/>
      <Feature/>
      <Flash/>
      <MoreProducts/>
    </main>
  );
}
