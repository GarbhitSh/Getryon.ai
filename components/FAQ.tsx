import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BlurFade from "@/components/magicui/blur-fade"; 

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {};

const faqItems: FAQItem[] = [
  {
    question: 'What is InstaTryOn and how does its technology work?',
    answer:
      'InstaTryOn enhances fashion brands’ customer journeys by providing engaging AI-powered try-on experiences. Customers can visualize outfits and clothing on models or themselves with dynamic images and videos generated by our proprietary AI-based technology.',
  },
  {
    question: 'How does InstaTryOn help in boosting online sales?',
    answer:
      'InstaTryOn positively impacts key eCommerce metrics such as conversion rate, average order value (AOV), and return reduction. Shoppers can easily visualize how clothes will fit, driving higher conversion rates, and personalized outfit inspiration boosts AOV while reducing return rates.',
  },
  {
    question: 'Can we customize the appearance and functionality of InstaTryOn to match our brand?',
    answer:
      'Yes, InstaTryOn is fully customizable to match the look and feel of your brand. From the user interface (UI) to user experience (UX), everything can be tailored to meet your brand’s specific requirements, ensuring a seamless integration into your customer journey.',
  },
  {
    question: 'Is InstaTryOn compatible with different mobile devices and browsers?',
    answer:
      'InstaTryOn is designed to be mobile-first, responsive, and compatible across all devices and browsers, including Android and iOS platforms, providing a consistent experience for users no matter how they interact with your e-commerce site.',
  },
  {
    question: 'How easy is it to integrate InstaTryOn into our existing e-commerce platform?',
    answer:
      'InstaTryOn seamlessly integrates with any e-commerce platform via a simple JavaScript (JS) integration. This ensures quick deployment without major changes to your existing CMS or backend systems, enhancing your online shopping experience efficiently.',
  },
];

const FAQ = (props: Props) => {
  return (
    <section className="relative bg-white dark:bg-background z-10 p-4 pb-10 md:pb-40">
      <div className="flex relative z-0 justify-center gap-4 md:gap-6 items-center flex-col">
        <BlurFade delay={0.1} inView>
          <h1 className="text-4xl inline md:inline relative z-10 md:text-7xl font-extrabold text-center">
            Frequently Asked <br /> Questions (FAQ)
          </h1>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h1 className="text-center relative z-3 max-w-2xl text-lg md:text-2xl">
            For more, reach out to us through Mail. <br className='hidden md:inline' /> Join Our Newsletter to have more in-depth understanding of our product.
          </h1>
        </BlurFade>

        <div className="max-w-4xl w-full mx-auto mt-6">
          <BlurFade delay={0.3} inView>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className='text-base text-start md:text-lg'>{item.question}</AccordionTrigger>
                  <AccordionContent className='text-base md:text-lg'>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
