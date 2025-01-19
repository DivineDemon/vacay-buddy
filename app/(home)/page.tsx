import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";
import Banner from "@/components/home/Banner";
import PublicPlans from "@/components/home/PublicPlans";
import Footer from "@/components/home/Footer";
import NewsLetter from "@/components/home/NewsLetter";

export default function Home() {
  return (
    <div className="scroll-m-5 w-full">
      <Banner />
      <HowItWorks />
      <PublicPlans />
      <Pricing />
      <NewsLetter />
      <Footer />
    </div>
  );
}
