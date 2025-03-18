import { AccordionComponent } from "@/components/homepage/accordion-component";
import BlogSample from "@/components/homepage/blog-samples";
import HeroSection from "@/components/homepage/hero-section";
import MarketingCards from "@/components/homepage/marketing-cards";
import PricingOld from "@/components/homepage/pricingold";
import SideBySide from "@/components/homepage/side-by-side";
import config from "@/config";
import Banner from "@/components/Banner";
import BgPic from "@/components/BgPic";
import CMS from "@/components/CMS";
import CardDissappear from "@/components/CardDissappear";
import Explain from "@/components/Explain";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";
import LogoTicker from "@/components/LogoTicker";
import Pricing from "@/components/Pricing";
import Showcase from "@/components/Showcase";
import Solutions from "@/components/Solutions";
import Testimonial from "@/components/Testimonial";
import Trail from "@/components/Trail";
import NavBar from "@/components/NavBar";
import { UserProfile } from "@/components/user-profile";

//bg-gradient-to-r from-teal-200 to-teal-500
//bg-gradient-to-r from-teal-200 to-teal-500

/* 
1. Banner
2. NavBar
3. Hero Header - intro
4. Logo Ticker
5. 3 explanation section - 4 features, Video demo each, Explaination
6. Pricing
7. Testimonial
8. Frequent questions
9. Sign up for free today
10. Bottom bar 
*/

export default function Home() {
  return (
    <>
    <main className="relative">
      <Banner/>
      <div className="h-[2px] relative z-30 bg-gradient-to-r from-yellow-500 via-purple-500 to-green-500" />
      <NavBar/>
      <HeroHeader/>
      <LogoTicker/>
      <Solutions/>
      <Showcase/>  
      <Explain/>
      <CMS/>
      {(config.auth.enabled && config.payments.enabled) && <div>
        <Pricing/>
      </div>}      
      <Testimonial/>
      <CardDissappear/>
      <FAQ/>
      <BgPic/>
      <Trail/>
      <Footer />
    </main>
    </>
  );
}

