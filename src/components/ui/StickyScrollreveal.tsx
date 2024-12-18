"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Define a more specific type for content prop
export interface ContentItem {
  title: string;
  description: string;
  content?: React.ReactNode; // Optional content, no need for `any`
}

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ContentItem[]; // Use defined ContentItem type
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);

  const backgroundColors = [
    "var(--mutedOlive)",
    "var(--black)",
    "var(--neutral-900)",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]); // Add linearGradients to the dependencies

  const handleCardChange = (index: number) => {
    setActiveCard(index); // Example of triggering setActiveCard on some interaction
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] flex justify-center relative space-x-10 rounded-md p-2 sm:p-8"
    >
      <div className="relative flex items-start px-2 overflow-hidden">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-extrabold text-red-900"
                onClick={() => handleCardChange(index)} // Example of interaction
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-ivory max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-80 w-[350px] mt-11 border border-deepRed rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
