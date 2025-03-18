"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { mix, distance, wrap } from "@popmotion/popcorn";
import {
  center,
  powerOut4,
  generateSize,
  useAnimationLoop,
} from "../utils/framer-utils";

import a1Female from '@/assets/datar/female/product/a1.png';
import a2Female from '@/assets/datar/female/product/a2.png';
import b2Female from '@/assets/datar/female/product/b2.png';
import b3Female from '@/assets/datar/female/product/b3.jpeg';

import a1Male from '@/assets/datar/male/product/a1.jpg';
import a2Male from '@/assets/datar/male/product/a3.jpeg';
import a3Male from '@/assets/datar/male/product/b1.png';
import b1Male from '@/assets/datar/male/product/b2,a2.jpg';
import b3Male from '@/assets/datar/male/product/b3.jpg';

const images = [
  a1Female.src, a2Female.src, b2Female.src, b3Female.src,
  a1Male.src, a2Male.src, a3Male.src, b1Male.src, b3Male.src,
];

type Position = {
  xOrigin: number;
  yOrigin: number;
  x: number;
  y: number;
  style: React.CSSProperties;
};

type ImagePlaceholderProps = {
  position?: Position;
  imageSrc: string;
};

const ImagePlaceholder = ({ position, imageSrc }: ImagePlaceholderProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!position) return;
    const { xOrigin, x, yOrigin, y } = position;
    controls.start({
      x: [xOrigin, x, x],
      y: [yOrigin, y, y],
      opacity: [1, 1, 0],
      scale: [1, 1, 0.2],
      transition: {
        duration: 0.8,
        ease: ["easeOut", powerOut4, powerOut4],
        times: [0, 0.7, 1],
      },
    });
  }, [position, controls]);

  const style = position ? position.style : {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transformTemplate={center}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        position: "absolute",
        top: "0",
        left: "0",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        ...style,
        width: "150px",
        height: "188px",
      }}
      className="hidden md:inline"
    />
  );
};


type TrailImagesProps = {
  distanceThreshold?: number;
};

const TrailImages = ({ distanceThreshold = 140 }: TrailImagesProps) => {
  const mouseInfo = useRef({
    now: { x: 0, y: 0 },
    prev: { x: 0, y: 0 },
    prevImage: { x: 0, y: 0 },
  }).current;

  const imagePositions = useRef<Position[]>([]);

  const [index, setIndex] = useState(0);

  useAnimationLoop(() => {
    const mouseDistance = distance(mouseInfo.now, mouseInfo.prevImage);

    mouseInfo.prev = {
      x: mix(mouseInfo.prev.x || mouseInfo.now.x, mouseInfo.now.x, 0.1),
      y: mix(mouseInfo.prev.y || mouseInfo.now.y, mouseInfo.now.y, 0.1),
    };

    if (mouseDistance > distanceThreshold) {
      const newIndex = index + 1;
      const imageIndex = wrap(0, images.length - 1, newIndex);

      imagePositions.current[imageIndex] = {
        xOrigin: mouseInfo.prev.x,
        yOrigin: mouseInfo.prev.y,
        x: mouseInfo.now.x,
        y: mouseInfo.now.y,
        style: {
          ...generateSize(),
          zIndex: imageIndex,
        },
      };

      mouseInfo.prevImage = mouseInfo.now;

      setIndex(newIndex);
    }
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Account for the scroll position by subtracting scrollX and scrollY
      const x = e.pageX - window.scrollX;
      const y = e.pageY - window.scrollY;

      mouseInfo.now = { x, y };
    };

    // Bind the mousemove event globally
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseInfo]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1, 
        pointerEvents: "none", 
      }}
    >
      {images.map((imageSrc, i) => (
        <ImagePlaceholder
          position={imagePositions.current[i]}
          imageSrc={imageSrc}
          key={i}
        />
      ))}
    </div>
  );
};

type Props = {};

const Trail = (props: Props) => {
  return <TrailImages />;
};

export default Trail;
