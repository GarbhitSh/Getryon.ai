"use client"
import React, { useRef } from 'react'
import StripePricing from './StripePricing'
import { OrbitingCirclesDemo } from './Orbit'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BorderBeam } from './magicui/border-beam'
import BlurFade from "@/components/magicui/blur-fade"; 

type Props = {}

const CMS = (props: Props) => {

  const uplift = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: uplift,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <section className='relative z-10 p-4 pb-10 md:pb-40 overflow-hidden'>
      <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: '800px',
            }}>
        <div ref={uplift} className='bg-white border relative max-w-7xl mx-auto p-4 pb-0 pt-10 shadow-lg m-10 rounded-2xl'>
          <div className="absolute blur-3xl inset-0 -z-10 overflow-hidden bubbles"></div>
          <div className="absolute blur-3xl inset-0 -z-10 overflow-hidden purple-bubbles"></div>
          <div className='flex relative z-0 justify-center gap-4 md:gap-6 items-center flex-col'>
          <BlurFade delay={0.2} inView>
              <h1 className="text-4xl text-black relative z-10 md:text-7xl font-extrabold text-center">
                CMS Integration
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <h1 className='text-center text-black relative z-3 max-w-2xl text-lg md:text-2xl'>
                InstaTryOn integrates with all leading CMS in the market to help you leverage the potential of Virtual Try On Shopping in seconds.
              </h1>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <OrbitingCirclesDemo />
            </BlurFade>
          </div>
          <div className='max-w-7xl rounded-2xl'>
            <BorderBeam />
          </div>
        </div>   
      </motion.div>  
    </section>
  )
}

export default CMS