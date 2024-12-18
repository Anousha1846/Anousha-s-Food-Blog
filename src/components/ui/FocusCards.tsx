"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { StickyScroll } from "../ui/StickyScrollreveal"; 
import { Dialog } from "@headlessui/react"; 
import { XIcon } from "lucide-react";

type Card = {
  title: string;
  src: string | StaticImageData;
  description: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto md:px-8 px-6 w-full">
        {cards.map((card, index) => (
          <div
            key={card.title}
            onClick={() => setSelectedCard(card)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
              hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
            )}
          >
            <Image
              src={card.src}
              alt={card.title}
              fill
              className="object-cover absolute inset-0"
            />
            <div
              className={cn(
                "absolute inset-0 bg-black/70 flex items-end py-8 px-4 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <Dialog
          open={!!selectedCard}
          onClose={() => setSelectedCard(null)}
          className="fixed inset-0 z-50  flex items-center justify-center bg-black/50"
        >
          <div className="bg-ivory rounded-lg max-w-3xl w-full md:p-7 p-6 relative">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-2 right-2 text-red-800 rounded-full  font-bold "
            ><XIcon/>
            </button>
            <StickyScroll
              content={[
                {
                  title: selectedCard.title,
                  description: selectedCard.description,
                  content: (
                    <Image
                      src={selectedCard.src}
                      alt={selectedCard.title}
                      className="rounded-md"
                      fill
                    />
                  ),
                },
              ]}
            />
          </div>
        </Dialog>
      )}
    </>
  );
}
