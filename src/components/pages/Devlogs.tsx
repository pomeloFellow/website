import React from "react";
import Topbar from "../TopBar";
import "../../styles/Devlogs.css";
import DevlogCard from "../DevlogCard";
import { DevlogCardType } from "../../types/DevlogCard";
import devlogcards from "../../data/devlogcards.json";

const Devlogs: React.FC = () => {
  const cards: DevlogCardType[] = devlogcards;

  return (
    <div>
      <Topbar />
      <div className="card_container">
        {cards.map((card, index) => (
          <DevlogCard
            key={index}
            devlog_name={card.devlog_name}
            update_date={card.update_date}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Devlogs;
