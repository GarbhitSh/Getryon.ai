import React from 'react';
import StripePricing from './StripePricing';
import BlurFade from "@/components/magicui/blur-fade"; 
import PricingOld from "./homepage/pricingold"

type Props = {}

const Pricing = (props: Props) => {
  return (
    <section className='relative z-10 p-4 pb-10 md:pb-40'>
      <div className="absolute blur-3xl inset-0 -z-10 overflow-hidden bubbles"></div>
      <div className="absolute blur-3xl inset-0 -z-10 overflow-hidden purple-bubbles"></div>
      <div className='flex relative z-0 justify-center gap-4 md:gap-6 items-center flex-col'>
        
        <BlurFade delay={0.2} inView>
          <h1 className="text-4xl relative z-10 md:text-7xl font-extrabold text-center">
            Pricing
          </h1>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <h1 className='text-center relative z-3 max-w-2xl text-lg md:text-2xl'>
            Pay only for the Try-On you generate and use, <br className='hidden md:inline' /> without subscription lock-in.
          </h1>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <PricingOld/>
        </BlurFade>
        
      </div>
    </section>
  );
}

export default Pricing;
