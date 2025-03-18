"use client";
import React, { useEffect, useRef, useState } from 'react';
import { CodeXml, Pause, Play, Shirt, ShoppingBag } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlurFade from "@/components/magicui/blur-fade"; 

type Props = {}

const Showcase = ({}: Props) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentSegment, setCurrentSegment] = useState(0); 
  const videoRef = useRef<HTMLVideoElement>(null);

  const segments = [
    { id: 0, start: 0, end: 1 },
    { id: 1, start: 1, end: 3 },
    { id: 2, start: 3, end: 4 },
  ];

  useEffect(() => {
    const video = videoRef.current;
    const updateTime = () => {
      const currentTime = video?.currentTime || 0;
      
      segments.forEach((segment) => {
        if (currentTime >= segment.start && currentTime < segment.end) {
          setCurrentSegment(segment.id);
        }
      });
    };

    video?.addEventListener("timeupdate", updateTime);

    return () => {
      video?.removeEventListener("timeupdate", updateTime);
    };
  }, [segments]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };

  const handleSegmentClick = (segmentId: number) => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = segments[segmentId].start;
    }
  };

  const uplift = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: uplift,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className='relative overflow-hidden z-10 p-4 pb-10 md:pb-40'>
      <div className="absolute blur-3xl inset-0 -z-10 overflow-hidden bubbles"></div>
      <div className="absolute blur-3xl inset-0 -z-10 overflow-hidden purple-bubbles"></div>
      
      <div className='flex relative z-0 justify-center gap-4 md:gap-6 items-center flex-col'>
        <BlurFade delay={0.2} inView>
          <h1 className="text-4xl relative z-10 md:text-7xl font-extrabold text-center">
            No model needed <br />No studio needed <br />Just your product!
          </h1>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <h1 className='text-center relative z-3 max-w-2xl text-lg md:text-2xl'>
            Upload a photo or search the web for your clothing product and generate an endless number of premium quality resolution on-model photos & virtual try-on of it.
          </h1>
        </BlurFade>

        <div className='flex flex-col justify-center items-center'>
          <BlurFade delay={0.4} inView>
            <div className='flex flex-row gap-4 mt-4'>
              {segments.map((segment) => (
                <button
                  key={segment.id}
                  className={`px-4 py-2 font-bold hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-800 text-sm border rounded-lg transition-all duration-500 ease-in-out ${
                    currentSegment === segment.id
                      ? 'bg-pink-400 animate-buttonheartbeat dark:bg-pink-600 hover:bg-pink-400 dark:hover:bg-pink-600 rounded-lg transition-all duration-500'
                      : 'bg-white dark:bg-black'
                  }`}
                  onClick={() => handleSegmentClick(segment.id)}
                >
                  {segment.id === 0 && (
                    <div className='flex flex-row items-center gap-2'>
                      <Shirt className='w-4 h-4 text-black dark:text-white' />
                      <p className='hidden md:inline'>Quick Try On</p>
                    </div>
                  )}
                  {segment.id === 1 && (
                    <div className='flex flex-row items-center gap-2'>
                      <ShoppingBag className='w-4 h-4 text-black dark:text-white' />
                      <p className='hidden md:inline'>Shopping Closet</p>
                    </div>
                  )}
                  {segment.id === 2 && (
                    <div className='flex flex-row items-center gap-2'>
                      <CodeXml className='w-4 h-4 text-black dark:text-white' />
                      <p className='hidden md:inline'>API Integration</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </BlurFade>

          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: '800px',
            }}
          >
              <div ref={uplift} className='relative border w-[100%] max-w-7xl mb-8 mt-4 rounded-xl overflow-hidden'>
                <div className='absolute top-4 right-4 z-10'>
                  <div className='relative justify-center items-center'>
                    <button
                      onClick={togglePlayPause}
                      className='group cursor-pointer flex justify-center items-center'
                    >
                      {isPaused ? <Play className='text-white' /> : <Pause className='text-white' />}
                    </button>
                  </div>
                </div>
                <video className='w-full' ref={videoRef} loop muted autoPlay>
                  <source src='/video.mp4' type='video/mp4' />
                </video>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
