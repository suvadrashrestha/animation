"use client";
import { useState } from "react";

interface CardItem {
  id: number;
  title: string;
  content: string;
}

const cardsData: CardItem[] = [
  { id: 1, title: "Card 1", content: "Content 1" },
  { id: 2, title: "Card 2", content: "Content 2" },
  { id: 3, title: "Card 3", content: "Content 3" },
];

const FlexGrid = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <div className="flex flex-wrap gap-4 p-4 md:flex-nowrap">
      {cardsData.map((card) => {
        const isActive = card.id === activeId;
        return (
          <div
            key={card.id}
            onClick={() => setActiveId(card.id)}
            className={`
              flex-1
              md:transition-all md:duration-500 md:ease-in-out
              cursor-pointer
              rounded-lg shadow-lg
              p-4
              text-white
              ${isActive ? "md:flex-[2.5] bg-green-500" : "md:flex-1 bg-pink-500"}
              w-full
              md:w-auto
            `}
          >
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p>{card.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FlexGrid;
