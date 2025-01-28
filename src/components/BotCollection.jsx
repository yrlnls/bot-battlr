import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, botFunction, yourArmy }) {
  const handleBotClick = (bot) => {
    console.log("Clicked bot:", bot);
    console.log("Current army:", yourArmy);
    if (!yourArmy.some((armyBot) => armyBot.id === bot.id)) {
      botFunction(bot);
    }
  };

  const botCards = bots.map((bot) => (
    <BotCard key={bot.id} bot={bot} botFunction={() => handleBotClick(bot)} />
  ));

  return (
    <div className="ui four column grid">
      <div className="row">
        {botCards}
      </div>
    </div>
  );
}

export default BotCollection;
