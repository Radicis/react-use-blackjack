import React from "react";
import { Card } from "../../../types/types";
import RenderCard from "../../shared/RenderCard/RenderCard";
import { v4 } from "uuid";

type Props = {
  showHandValue: boolean;
  currentHandValue: number;
  cards: Card[];
};

const CardList = ({ showHandValue, currentHandValue, cards }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="border border-gray-300 bg-gray-200 px-4 py-2 rounded">
        {showHandValue ? currentHandValue : "??"}
      </div>
      <div className="flex gap-2">
        {cards.map((card: Card, idx) => (
          <RenderCard
            key={v4()}
            suit={card.suit}
            faceUp={idx === 0 || showHandValue} // We hide the second card until hand is revealed
            label={card.label}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
