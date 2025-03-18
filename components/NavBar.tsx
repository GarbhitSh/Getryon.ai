"use client";

import React, { useState } from 'react';
import logoImage from '@/assets/icons/linkedin.svg';
import MenuIcon from '@/assets/icons/menu.svg';
import Image from 'next/image';
import ModeToggle from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { MousePointer2, MousePointerClick } from 'lucide-react';
import { Separator } from './ui/separator';
import { useAuth } from "@clerk/nextjs";
import config from "@/config";
import { UserProfile } from './user-profile';

type Props = {};

const NavBar = (props: Props) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const { userId } = useAuth(); 
    let finalUserId = null;

    if (config?.auth?.enabled) {
        finalUserId = userId;
    }

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  // Scroll to top function
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
      <div className='w-full sticky top-0 z-20 bg-white dark:bg-black p-4 border-b'>
        <div className='max-w-7xl w-full mx-auto'>
          <div className='flex flex-row w-full items-center justify-between'>
            <div className='relative gap-2 h-10 flex flex-row items-center justify-center'>
              <div onClick={handleScrollToTop} className='text-xl relative flex flex-row text-center duration-1000 cursor-pointer animate-title whitespace-normal items-center'>
                <p>GeTryOn</p>
                <MousePointerClick className='w-6 h-6 ml-1 whitespace-nowrap'/>
              </div>
            </div>
            <div className='flex flex-row items-center gap-2 sm:hidden'>
              <button onClick={toggleSheet}>
                <MenuIcon />
              </button>
            </div>
            <NavigationMenu className='hidden sm:flex'>
              <NavigationMenuList className='flex gap-6 items-center'>
 
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About us</NavigationMenuTrigger>
                  <NavigationMenuContent>
  
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                {finalUserId && <UserProfile />}
                <ModeToggle />
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetContent className='flex gap-0 pt-10 items-center w-full flex-col'>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className='mb-2'>Navigation menu for mobile devices</SheetDescription>
              <Separator />
              {/* Mobile navigation accordion */}
              <Accordion type="single" collapsible className='w-full mt-6'>
                <AccordionItem value="solutions">
                  <AccordionTrigger>Solutions</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="about">
                  <AccordionTrigger>About us</AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid gap-3 p-4">
                      <li className='p-2'>
                        <a href="#" className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition">
                          <div className="text-sm font-medium">Our Story</div>
                          <p className="text-sm">Learn about our journey and mission.</p>
                        </a>
                      </li>
                      <li className='p-2'>
                        <a href="#" className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition">
                          <div className="text-sm font-medium">Team</div>
                          <p className="text-sm">Meet the talented individuals behind InstaTryOn.</p>
                        </a>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SheetContent>
          </Sheet>
        </div>
       
      </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
});
ListItem.displayName = "ListItem";

export default NavBar;
