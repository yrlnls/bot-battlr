import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";  
import BotCollection from "./BotCollection";  
import db from "../../db.json"; // Assuming db.json contains the bots data

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);

  useEffect(() => {
    setBots(db.bots); // Load bots from db.json
  }, []);

  const addBotToArmy = (bot) => {
    console.log("Attempting to add bot:", bot);
    console.log("Current army:", yourArmy);
    if (!yourArmy.some((armyBot) => armyBot.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
      console.log("Bot added to army:", bot);
    } else {
      console.log("Bot is already in the army.");
    }
  };

  const removeBotFromArmy = (botId) => {
    const updatedArmy = yourArmy.filter((bot) => bot.id !== botId);
    setYourArmy(updatedArmy);
  };

  const dischargeBot = (botId) => {
    const updatedBots = bots.filter((bot) => bot.id !== botId);
    setBots(updatedBots);
    removeBotFromArmy(botId);
  };

  return (
    <div>
      <h1>Bot Collection</h1>
      <BotCollection bots={bots} botFunction={addBotToArmy} yourArmy={yourArmy} />
      <h1>Your Bot Army</h1>
      <YourBotArmy bots={yourArmy} removeBot={removeBotFromArmy} dischargeBot={dischargeBot} />
    </div>
  );
}

export default BotsPage;
