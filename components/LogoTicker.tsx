import Image from 'next/image';
import React from 'react';
import BlurFade from '@/components/magicui/blur-fade'; // Importing BlurFade
import i1 from '@/assets/slider/i1.png';
import i2 from '@/assets/slider/i2.png';
import i3 from '@/assets/slider/i3.png';
import i4 from '@/assets/slider/i4.png';
import i5 from '@/assets/slider/i5.png';
import i6 from '@/assets/slider/i6.png';
import i7 from '@/assets/slider/i7.png';
import i8 from '@/assets/slider/i8.png';
import i9 from '@/assets/slider/i9.png';
import i10 from '@/assets/slider/i10.png';
import i11 from '@/assets/slider/i11.png';
import i12 from '@/assets/slider/i12.png';
import i13 from '@/assets/slider/i13.png';
import i14 from '@/assets/slider/i14.png';
import i15 from '@/assets/slider/i15.png';

const images = [
  i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i13, i14, i15,
];

const LogoTicker = () => {
  return (
    <section className='relative z-0 py-8 px-4 pb-20 md:pb-40'>
      <BlurFade delay={0.2} inView>
        <h2 className='text-center text-sm md:text-lg mb-8 font-semibold text-gray-400'>
          Let's You and your customer's Try On styles from 10,000+ E-commerce stores, Anytime, Anywhere.
        </h2>
      </BlurFade>
      <BlurFade delay={0.3} inView>
        <div className='relative overflow-hidden'>
          <div className='absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white dark:bg-gradient-to-r dark:from-background dark:via-transparent dark:to-background'></div>
          <div className='flex gap-16 animate-scroll'>
            {images.concat(images).map((src, index) => (
              <Image
                key={index}
                className='flex-none h-5 md:h-8 w-auto grayscale hover:grayscale-0 transition-filter duration-200 ease-linear hover:blur-none'
                src={src}
                alt={`slider-${index}`}
              />
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default LogoTicker;
