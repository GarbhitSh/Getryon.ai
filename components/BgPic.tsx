import Image from 'next/image';
import React from 'react';
import BigImage from '@/assets/images/bg-bottom-pic.jpg';
import { Button } from './ui/button';
import BlurFade from "@/components/magicui/blur-fade";

type Props = {}

const BgPic = (props: Props) => {
  return (
    <section 
      className='relative z-10 h-[30rem] flex items-center justify-center bg-cover object-center'
      style={{ backgroundImage: `url(${BigImage.src})` }}
    >
      <BlurFade delay={0.2} inView>
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-white text-4xl font-semibold">Excited to try with your own product/photo?</h2>
          <p className="text-white text-2xl">Have a specific request?</p>
          <a href="mailto:contact@getryon.xyz">
            <Button className="relative mt-2 animate-buttonheartbeat h-14 md:h-14 px-4 md:px-4 rounded-lg text-xl transition-all">
              <span className="relative z-10 font-bold text-sm md:text-base">Contact Us</span>
            </Button>
          </a>
        </div>
      </BlurFade>
    </section>
  );
}

export default BgPic;
