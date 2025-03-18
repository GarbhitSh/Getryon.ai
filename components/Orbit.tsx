import React, { useState, useEffect } from "react";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { MousePointerClick } from 'lucide-react';
import { FaShopify, FaWordpress, FaNpm } from "react-icons/fa";

export function OrbitingCirclesDemo() {
  const [radiusNo, setRadiusNo] = useState(150);

  // Dynamically adjust the radius based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setRadiusNo(190); // Larger than md
      } else if (window.innerWidth >= 768) {
        setRadiusNo(150); // md screens
      } else {
        setRadiusNo(100); // Smaller screens
      }
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex h-[300px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent">
      <span className="pointer-events-none md:font-semibold flex flex-row items-center whitespace-pre-wrap bg-gradient-to-b from-pink-500 to-purple-300 bg-clip-text text-center text-4xl md:text-8xl font-semibold leading-none text-transparent">
        InstaTryOn 
        <MousePointerClick className="text-pink-400 w-10 h-10 md:w-20 md:h-20 pointer-events-none" />
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[20px] md:size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={radiusNo / 2} // Half the main radius
      >
        <FaShopify className="w-12 h-12 md:w-24 md:h-24 text-black" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[20px] md:size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={radiusNo / 2} 
      >
        <FaWordpress className="w-8 h-8 md:w-16 md:h-16 text-black" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[40px] md:size-[50px] border-none bg-transparent"
        radius={radiusNo }
        duration={20}
        reverse
      >
        <FaNpm className="w-12 h-12 md:w-16 md:h-16 text-black" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] md:size-[100px] border-none bg-transparent grayscale"
        radius={radiusNo } 
        duration={20}
        delay={20}
        reverse
      >
        <Icons.woo />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  woo: () => (
    <svg className="text-black" width="90" height="90" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6707_26555)">
        <path d="M33.6464 42H96.3232C100.29 42 103.501 45.2108 103.501 49.1775V73.1023C103.501 77.0687 100.29 80.2798 96.3232 80.2798H73.8468L76.9319 87.8349L63.3639 80.2798H33.6783C29.7119 80.2798 26.5008 77.069 26.5008 73.1023V49.1775C26.4693 45.2424 29.68 42 33.6464 42Z" fill="#7F54B3"/>
        <path d="M30.8848 48.542C31.323 47.9473 31.9803 47.6342 32.8567 47.5717C34.4531 47.4465 35.3608 48.1977 35.5799 49.8253C36.5502 56.3673 37.6144 61.9074 38.7414 66.4462L45.5962 53.3938C46.2222 52.2043 47.0047 51.5783 47.9438 51.5157C49.321 51.4218 50.1661 52.2982 50.5104 54.145C51.293 58.3081 52.2946 61.845 53.484 64.8498C54.2979 56.8993 55.6751 51.1715 57.6159 47.6343C58.0854 46.7579 58.774 46.3197 59.6817 46.2571C60.4016 46.1945 61.059 46.4136 61.6537 46.8831C62.2484 47.3526 62.5614 47.9473 62.624 48.6672C62.6553 49.2306 62.5614 49.7001 62.311 50.1697C61.0902 52.4233 60.0886 56.2108 59.2749 61.4691C58.4924 66.5713 58.2107 70.5464 58.3985 73.3948C58.4611 74.1773 58.3359 74.8659 58.0228 75.4606C57.6472 76.1492 57.0838 76.5249 56.3639 76.5874C55.5501 76.65 54.705 76.2745 53.8912 75.4293C50.9802 72.4557 48.6639 68.0112 46.9738 62.0951C44.9393 66.1015 43.4369 69.1066 42.4666 71.1098C40.6199 74.6467 39.0548 76.4622 37.7401 76.556C36.895 76.6186 36.1751 75.8987 35.549 74.3963C33.9527 70.2957 32.2311 62.3768 30.3843 50.6391C30.2591 49.8253 30.4469 49.1053 30.8851 48.5419L30.8848 48.542ZM98.1515 53.4561C97.0247 51.4842 95.3657 50.2946 93.1435 49.8251C92.5488 49.6999 91.9854 49.6373 91.4532 49.6373C88.4484 49.6373 86.007 51.2024 84.0976 54.3325C82.47 56.9931 81.6562 59.9354 81.6562 63.1592C81.6562 65.5694 82.157 67.6351 83.1586 69.3568C84.2854 71.3288 85.9444 72.5183 88.1666 72.9879C88.7613 73.1131 89.3247 73.1757 89.8568 73.1757C92.8929 73.1757 95.3344 71.6106 97.2124 68.4805C98.8401 65.7886 99.6539 62.8462 99.6539 59.6225C99.6852 57.181 99.1531 55.1465 98.1515 53.4561ZM94.2076 62.1265C93.7694 64.1923 92.9869 65.7259 91.8288 66.7591C90.9211 67.5729 90.076 67.9172 89.2934 67.7607C88.5422 67.6042 87.9162 66.9469 87.4467 65.7262C87.0711 64.7559 86.8833 63.7855 86.8833 62.8778C86.8833 62.0953 86.9459 61.3128 87.1024 60.5929C87.3841 59.3095 87.9162 58.0575 88.7613 56.868C89.7942 55.3342 90.8897 54.7082 92.0167 54.9273C92.7679 55.0839 93.3939 55.7412 93.8634 56.9619C94.239 57.9322 94.4268 58.9025 94.4268 59.8103C94.4268 60.6241 94.3642 61.4065 94.2076 62.1265ZM78.5571 53.4561C77.4303 51.4842 75.74 50.2946 73.5491 49.8251C72.9544 49.6999 72.391 49.6373 71.8588 49.6373C68.854 49.6373 66.4126 51.2024 64.5032 54.3325C62.8756 56.9931 62.0618 59.9354 62.0618 63.1592C62.0618 65.5694 62.5626 67.6351 63.5642 69.3568C64.691 71.3288 66.35 72.5183 68.5722 72.9879C69.1669 73.1131 69.7303 73.1757 70.2625 73.1757C73.2985 73.1757 75.74 71.6106 77.6181 68.4805C79.2457 65.7886 80.0595 62.8462 80.0595 59.6225C80.0595 57.181 79.5587 55.1465 78.5571 53.4561ZM74.582 62.1265C74.1438 64.1923 73.3613 65.7259 72.2031 66.7591C71.2954 67.5729 70.4503 67.9172 69.6677 67.7607C68.9165 67.6042 68.2905 66.9469 67.821 65.7262C67.4454 64.7559 67.2576 63.7855 67.2576 62.8778C67.2576 62.0953 67.3202 61.3128 67.4767 60.5929C67.7584 59.3095 68.2905 58.0575 69.1356 56.868C70.1685 55.3342 71.2641 54.7082 72.391 54.9273C73.1422 55.0839 73.7682 55.7412 74.2377 56.9619C74.6133 57.9322 74.8011 58.9025 74.8011 59.8103C74.8324 60.6241 74.7385 61.4065 74.582 62.1265Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_6707_26555">
          <rect width="77" height="46.0195" fill="white" transform="translate(26.5 42)"/>
        </clipPath>
      </defs>
    </svg>
  ),
};
