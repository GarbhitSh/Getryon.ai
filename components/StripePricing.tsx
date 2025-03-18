"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { TITLE_TAILWIND_CLASS } from "@/utils/constants"
import { motion } from "framer-motion" // Import framer-motion

type PricingSwitchProps = {
  onSwitch: (value: string) => void
}

type PricingCardProps = {
  isYearly?: boolean
  title: string
  monthlyPrice?: number
  yearlyPrice?: number
  description: string
  features: string[]
  actionLabel: string
  popular?: boolean
  exclusive?: boolean
}

const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="text-center">
    <h1 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}>{title}</h1>
    <p className="text-gray-600 dark:text-gray-400 pt-1">{subtitle}</p>
    <br />
  </section>
)

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
  <div className="">
    <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
      <TabsList className="py-6 px-2">
        <TabsTrigger value="0" className="text-base">
          <p className="text-black dark:text-white">Monthly</p>
        </TabsTrigger>
        <TabsTrigger value="1" className="text-base">
          <p className="text-black dark:text-white">Yearly</p>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
)

const PricingCard = ({ isYearly, title, monthlyPrice, yearlyPrice, description, features, actionLabel, popular, exclusive }: PricingCardProps) => (
  <Card
    className={cn(`w-72 flex flex-col justify-between py-1 ${popular ? "border-pink-500" : "border-zinc-700"} mx-auto sm:mx-0`, {
      "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
        exclusive,
    })}
  >
    <div className="relative">
      {/* Conditionally render the "Most Popular" badge */}
      {popular && (
        <div className="absolute -top-4 -right-4 bg-pink-500 text-white text-xs font-semibold py-1 px-3 rounded-lg shadow-lg">
          Most Popular
        </div>
      )}
      <CardHeader className="pb-8 pt-4">
        {isYearly && yearlyPrice && monthlyPrice ? (
          <div className="flex justify-between">
            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
            <div
              className={cn("px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 dark:bg-zinc-800 dark:text-white", {
                "bg-gradient-to-br text-white to-pink-600 from-purple-300": popular,
              })}
            >
              Save ${monthlyPrice * 12 - yearlyPrice}
            </div>
          </div>
        ) : (
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
        )}
        <div className="flex gap-0.5">
          {/* Use motion.div to animate price changes */}
          <motion.h2
            className="text-3xl font-bold"
            key={isYearly ? yearlyPrice : monthlyPrice} // Use key to trigger animation
            initial={{ opacity: 0, y: -10 }} // Animation starting state
            animate={{ opacity: 1, y: 0 }} // Animation end state
            transition={{ duration: 0.3 }} // Animation duration
          >
            {yearlyPrice && isYearly ? "$" + yearlyPrice : monthlyPrice ? "$" + monthlyPrice : "Custom"}
          </motion.h2>
          <motion.span
            className="flex flex-col justify-end text-sm mb-1"
            key={isYearly ? "yearly" : "monthly"} // Use key to trigger animation
            initial={{ opacity: 0, y: -10 }} // Animation starting state
            animate={{ opacity: 1, y: 0 }} // Animation end state
            transition={{ duration: 0.3 }} // Animation duration
          >
            {yearlyPrice && isYearly ? "/year" : monthlyPrice ? "/month" : null}
          </motion.span>
        </div>
        <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className="mt-2">
      <Button
        className={cn(
          "relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
          {
            "animate-buttonheartbeat": title === "Pro", // Apply animation only to "Pro" plan
          }
        )}
        type="button"
      >
        {actionLabel}
      </Button>
    </CardFooter>
  </Card>
)

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
)

export default function Pricing() {
  const [isYearly, setIsYearly] = useState<boolean>(false)
  const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1)

  const plans = [
    {
      title: "Basic",
      monthlyPrice: 10,
      yearlyPrice: 100,
      description: "Essential features you need to get started",
      features: ["Example Feature Number 1", "Example Feature Number 2", "Example Feature Number 3"],
      actionLabel: "Get Started",
    },
    {
      title: "Pro",
      monthlyPrice: 25,
      yearlyPrice: 250,
      description: "Perfect for owners of small & medium businesses",
      features: ["Example Feature Number 1", "Example Feature Number 2", "Example Feature Number 3"],
      actionLabel: "Get Started",
      popular: true, // Mark "Pro" plan as popular
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Dedicated support and infrastructure to fit your needs",
      features: ["Example Feature Number 1", "Example Feature Number 2", "Example Feature Number 3", "Super Exclusive Feature"],
      actionLabel: "Contact Sales",
      exclusive: true,
    },
  ]

  return (
    <div>
      <PricingSwitch onSwitch={togglePricingPeriod} />
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
        })}
      </section>
    </div>
  )
}
