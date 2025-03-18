"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import BlurFade from "@/components/magicui/blur-fade"; 

import avatar1 from '@/assets/images/path-to-avatar1.jpg';
import avatar2 from '@/assets/images/path-to-avatar2.jpg';
import avatar3 from '@/assets/images/path-to-avatar3.jpg';
import avatar4 from '@/assets/images/path-to-avatar4.jpg';
import avatar5 from '@/assets/images/path-to-avatar5.jpg';
import avatar6 from '@/assets/images/path-to-avatar6.jpg';
import avatar7 from '@/assets/images/path-to-avatar7.jpg';
import avatar8 from '@/assets/images/path-to-avatar8.jpg';
import avatar9 from '@/assets/images/path-to-avatar9.jpg';
import avatar10 from '@/assets/images/path-to-avatar10.jpg';
import avatar11 from '@/assets/images/path-to-avatar11.jpg';
import avatar12 from '@/assets/images/path-to-avatar12.jpg';
import avatar13 from '@/assets/images/path-to-avatar13.jpg';
import avatar14 from '@/assets/images/path-to-avatar14.jpg';
import avatar15 from '@/assets/images/path-to-avatar15.jpg';

type Props = {};

interface Testimonial {
  name: string;
  username: string;
  message: string;
  avatar: string | StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jamie Rivera',
    username: '@jamietechguru00',
    message: 'The AI Try-On feature has transformed the way our customers shop. It’s easy to use, and we saw a 70% increase in engagement within the first week of launch!',
    avatar: avatar1,
  },
  {
    name: 'Casey Jordan',
    username: '@caseyj',
    message: 'Our customers are absolutely loving the AI Try-On. It’s made online shopping so much more enjoyable, and our return rates have dropped significantly.',
    avatar: avatar2,
  },
  {
    name: 'Jordan Patels',
    username: '@jpateldesign',
    message: 'We’ve seen an incredible 60% rise in customer satisfaction since integrating this feature. It’s like giving every customer a personal fitting room!',
    avatar: avatar3,
  },
  {
    name: 'Josh Smith',
    username: '@jsmith',
    message: 'The AI Try-On has been a massive hit for our store. Customers are spending more time on the site and making more confident purchases. It’s been a game-changer.',
    avatar: avatar4,
  },
  {
    name: 'Taylor Kim',
    username: '@taylorkimms',
    message: 'The Try-On feature makes it so easy for customers to visualize how clothes will look on them. It’s made shopping online feel like shopping in-store.',
    avatar: avatar5,
  },
  {
    name: 'Sam Dawson',
    username: '@ideasntechtips',
    message: 'Since launching the AI Try-On, our conversion rates have skyrocketed. Our customers love the ability to see outfits come to life in real-time.',
    avatar: avatar6,
  },
  {
    name: 'Morgan Lee',
    username: '@morgberhowitz',
    message: 'The increase in customer engagement has been remarkable. Customers are trying on multiple items, mixing and matching, and spending more than ever before.',
    avatar: avatar7,
  },
  {
    name: 'Riley Smith',
    username: '@rileysmithnet',
    message: 'We’ve reduced return rates by nearly 40% thanks to the AI Try-On. Customers now feel more confident about their purchases, which has boosted our revenue.',
    avatar: avatar8,
  },
  {
    name: 'Casey Harper',
    username: '@casey09',
    message: 'The AI Try-On feature has led to a huge surge in customer engagement. Our customers are creating their own looks and making more purchases than ever before.',
    avatar: avatar9,
  },
  {
    name: 'Avery Gonzalez',
    username: '@averygonzalez',
    message: 'The customer feedback has been overwhelmingly positive since we introduced the AI Try-On. It’s helping us stand out in a competitive market.',
    avatar: avatar10,
  },
  {
    name: 'Hunter Mitchell',
    username: '@huntermitchell',
    message: 'We’ve seen a 25% rise in average order value since launching the AI Try-On. It’s helping customers find exactly what they’re looking for, faster and more confidently.',
    avatar: avatar11,
  },
  {
    name: 'Mason Reed',
    username: '@masonreedfashion',
    message: 'The ability for customers to see how items fit before buying has been a huge driver for sales. Our overall customer satisfaction has increased tremendously.',
    avatar: avatar12,
  },
  {
    name: 'Harper Parker',
    username: '@harperparker',
    message: 'Customers love the interactive experience! Our return rate has dropped, and our sales have never been better. The AI Try-On is an absolute must-have for online stores.',
    avatar: avatar13,
  },
  {
    name: 'Charlie Edwards',
    username: '@charliedwardsstyle',
    message: 'The AI Try-On has been incredibly beneficial for our e-commerce business. It’s made the shopping experience so much smoother and enjoyable for our customers.',
    avatar: avatar14,
  },
  {
    name: 'Quinn Taylor',
    username: '@quinntaylorfashion',
    message: 'We’ve seen a tremendous uptick in sales since implementing the AI Try-On. Customers are spending more time on our site and leaving with full carts!',
    avatar: avatar15,
  }
];

const firstColumn = testimonials.slice(0, 5).concat(testimonials.slice(0, 5));
const secondColumn = testimonials.slice(5, 10).concat(testimonials.slice(5, 10));
const thirdColumn = testimonials.slice(10, 15).concat(testimonials.slice(10, 15));

const columnAnimation = (height: number, speed: number) => ({
  y: [0, -height],
  transition: {
    repeat: Infinity,
    duration: speed,
    ease: "linear",
  },
});

const Testimonial = (props: Props) => {
  const firstColumnRef = useRef<HTMLDivElement>(null);
  const secondColumnRef = useRef<HTMLDivElement>(null);
  const thirdColumnRef = useRef<HTMLDivElement>(null);

  const [firstColumnHeight, setFirstColumnHeight] = useState(0);
  const [secondColumnHeight, setSecondColumnHeight] = useState(0);
  const [thirdColumnHeight, setThirdColumnHeight] = useState(0);

  useEffect(() => {
    if (firstColumnRef.current) {
      setFirstColumnHeight(firstColumnRef.current.scrollHeight / 2);
    }
    if (secondColumnRef.current) {
      setSecondColumnHeight(secondColumnRef.current.scrollHeight / 2);
    }
    if (thirdColumnRef.current) {
      setThirdColumnHeight(thirdColumnRef.current.scrollHeight / 2);
    }
  }, []);

  return (
    <section className="relative z-10 p-4 pb-20 md:pb-40">
      <div className="flex relative z-0 justify-center gap-4 md:gap-6 items-center flex-col">
        <h1 className="text-4xl relative z-10 md:text-7xl font-extrabold text-center">
          What our users say
        </h1>
        <h1 className="text-center relative z-3 max-w-2xl text-lg md:text-2xl">
          InstaTryOn has been successfully helping major brands &amp; designers engage their shoppers
          with Virtual Try On Shopping Experiences since 2023
        </h1>
      </div>

      <div
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black, black, transparent)',
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-7xl mx-auto px-4 space-y-10 h-[60rem] overflow-hidden"
      >
        <motion.div
          className="space-y-6"
          animate={columnAnimation(firstColumnHeight, 40)}
          ref={firstColumnRef}
        >
          {firstColumn.map((testimonial, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.05} inView>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-background rounded-xl shadow-lg p-6 mb-6 break-inside-avoid flex flex-col justify-between border"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.message}</p>
                <div className="flex items-center space-x-4 mt-auto">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-left flex justify-center items-start flex-col">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </motion.div>

        <motion.div
          className="space-y-6"
          animate={columnAnimation(secondColumnHeight, 30)}
          ref={secondColumnRef}
        >
          {secondColumn.map((testimonial, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.05} inView>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-background rounded-xl shadow-lg p-6 mb-6 break-inside-avoid flex flex-col justify-between border"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.message}</p>
                <div className="flex items-center space-x-4 mt-auto">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-left flex justify-center items-start flex-col">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </motion.div>

        <motion.div
          className="space-y-6"
          animate={columnAnimation(thirdColumnHeight, 20)}
          ref={thirdColumnRef}
        >
          {thirdColumn.map((testimonial, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.05} inView>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-background rounded-xl shadow-lg p-6 mb-6 break-inside-avoid flex flex-col justify-between border"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.message}</p>
                <div className="flex items-center space-x-4 mt-auto">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-left flex justify-center items-start flex-col">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
