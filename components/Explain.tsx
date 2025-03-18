"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade"; 
import ModelClothInput from "@/assets/datar/female/product/a3.png";
import ModelInput from "@/assets/datar/female/model/a.png";
import ImageOutput from "@/assets/datar/female/flow/anime1.gif";
import ModelGifInput from "@/assets/datar/female/flow/anime2.gif";
import ModelGifExtract from "@/assets/datar/female/flow/anime3.gif";
import ModelGifOutput from "@/assets/datar/female/flow/anime4.gif";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Camera,
  User,
  PlayCircle,
  Shirt,
  Move,
  ShoppingBag,
  UserRound,
  Clock,
  Globe2,
  Image as LucideImage,
} from "lucide-react"; 

interface CardData {
  step: number;
  icon: React.FC<any>;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  imageWidth: number;
}

const cardData: CardData[] = [
  {
    step: 1,
    icon: Camera,
    title: "Discover/Upload product photo",
    description:
      "Take a clear photo of your product or discover fashion deals from thousands of stores and upload it for a personalized try-on.",
    image: ModelClothInput,
    alt: "cloth input",
    imageWidth: 350,
  },
  {
    step: 2,
    icon: User,
    title: "Select a Model & Customize",
    description:
      "Choose a model that represents your audience or use a custom model. Adjust body types and poses to showcase your clothing.",
    image: ModelInput,
    alt: "model input",
    imageWidth: 330,
  },
  {
    step: 3,
    icon: PlayCircle,
    title: "Admire your generated shoot",
    description:
      "View the generated shoot with the selected model wearing your product, perfectly suited to the body type and style.",
    image: ImageOutput,
    alt: "diffused Try On result",
    imageWidth: 240,
  },
  {
    step: 4,
    icon: Shirt,
    title: "Choose/Upload a Try On",
    description:
      "Upload your own Try On video/gesture or choose one from AI-generated suggestions to see your clothing products in action.",
    image: ModelGifInput,
    alt: "Try On input",
    imageWidth: 240,
  },
  {
    step: 5,
    icon: Move,
    title: "Movements are mapped by AI",
    description:
      "Experience how your garments flow and react to movements. AI maps realistic movements to give a true-to-life feel.",
    image: ModelGifExtract,
    alt: "diffused Try On result",
    imageWidth: 240,
  },
  {
    step: 6,
    icon: ShoppingBag,
    title: "Your Instant Try On is Ready!",
    description:
      "Get your final AI-powered Try On instantly and review how your garments look. Ready for instant sharing or feedback.",
    image: ModelGifOutput,
    alt: "diffused Try On result",
    imageWidth: 240,
  },
];

interface Feature {
  icon: React.FC<any>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: UserRound,
    title: "Multiple Genders",
    description: "Select the gender that matches your clothing brand's audience.",
  },
  {
    icon: Clock,
    title: "Various Age Groups",
    description: "Tailor your model's age to effectively reach your target demographic.",
  },
  {
    icon: Globe2,
    title: "Different Ethnicities",
    description: "Change the model's ethnicity to perfectly match your target customer.",
  },
  {
    icon: LucideImage,
    title: "Unique Backgrounds",
    description: "Customize the background of the shoot to achieve your desired result.",
  },
  {
    icon: Camera,
    title: "Different Angles",
    description: "Experiment with various angles to capture the perfect shot.",
  },
  {
    icon: User,
    title: "Various Poses",
    description: "Personalize the model's pose to achieve the perfect look.",
  },
];

interface ImageCardProps {
  icon: React.FC<any>;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  imageWidth: number;
  index: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  icon: IconComponent,
  title,
  description,
  image,
  alt,
  imageWidth,
  index,
}) => {
  return (
    <BlurFade delay={0.2 + index * 0.1} inView className="relative group w-full">
      <>
        <Card className="border pt-6 flex flex-col justify-between items-center h-full transition-shadow duration-500 ease-in-out hover:shadow-lg relative rounded-lg shadow-sm">
          <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
            <div className="absolute z-0 left-0 bottom-0 w-48 h-48 rounded-full bg-purple-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
            <div className="absolute z-0 right-0 top-0 w-48 h-48 rounded-full bg-purple-500 opacity-50 blur-3xl transition-transform duration-1000 group-hover:-translate-x-[200%]"></div>
          </div>

          <h1 className="absolute whitespace-nowrap top-2 left-2 inline-block px-4 py-2 text-lg font-bold text-transparent bg-gradient-to-r rounded-lg to-pink-700 from-purple-400 bg-[length:200%_100%] bg-clip-text animate-glow">
            Step {index + 1}
          </h1>

          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-2">
              <div>
                <IconComponent className="w-5 h-5" />
              </div>
              <p className="text-xl font-bold">{title}</p>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>

          <CardContent className="z-10">
            <Image
              src={image}
              alt={alt}
              width={imageWidth}
              height={imageWidth * 0.75}
              className="z-10 rounded-lg"
            />
          </CardContent>
        </Card>
      </>
    </BlurFade>
  );
};

interface FeatureCardProps {
  icon: React.FC<any>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: IconComponent,
  title,
  description,
}) => {
  return (
    <BlurFade delay={0.2} inView>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{
          type: "spring",
          bounce: 0.7,
        }}
        className="p-6 cursor-pointer mx-auto border transition-shadow duration-500 ease-in-out bg-white dark:bg-background rounded-xl hover:shadow-lg flex flex-col items-center justify-center text-center space-y-4"
      >
        <IconComponent className="w-8 h-8 mb-4" />
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </motion.div>
    </BlurFade>
  );
};

const Explain = () => {
  return (
    <section className="relative overflow-hidden z-10 p-4 pb-10 md:pb-40">
      <div className="flex max-w-7xl mx-auto relative z-0 justify-center gap-4 md:gap-6 items-center flex-col">
        <BlurFade delay={0.1} inView>
          <h1 className="text-4xl relative z-10 md:text-7xl font-extrabold text-center">
            Empower your shoppers{" "}
            <span className="hidden md:inline">
              <br />
            </span>
            to better project into your collection & the garments{" "}
            <span className="hidden md:inline">
              <br />
            </span>
            they buy online
          </h1>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h1 className="text-center relative z-3 max-w-2xl text-lg md:text-2xl">
            Don't spend a ton of time and money on finding the right model for your brand. Tailor your model to suit your target audience and boost engagement.
          </h1>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cardData.map((card, index) => (
            <ImageCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              image={card.image}
              alt={card.alt}
              imageWidth={card.imageWidth}
              index={index}
            />
          ))}
        </div>

        <BlurFade delay={0.3} inView>
          <h1 className="text-center relative z-3 max-w-2xl text-lg md:text-2xl">
            And much more...
          </h1>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explain;
