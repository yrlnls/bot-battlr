import React, { useState } from "react";

function YourBotArmy({ bots = [], removeBot, addBot }) {
  const [armyBots, setArmyBots] = useState(bots);

  const handleAddBot = (bot) => {
    console.log("Attempting to add bot:", bot);
    if (!armyBots.some((armyBot) => armyBot.id === bot.id)) {
      console.log("Adding bot:", bot);
      setArmyBots([...armyBots, bot]);
      addBot(bot); // Call the function to add the bot to the army
    } else {
      console.log("Bot already in army:", bot);
    }
  };

  const handleRemoveBot = (botId) => {
    console.log("Removing bot:", botId);
    removeBot(botId);
    setArmyBots(armyBots.filter((bot) => bot.id !== botId));
  };

  const handleReleaseBot = (botId) => {
    console.log("Releasing bot:", botId);
    setArmyBots(armyBots.filter((bot) => bot.id !== botId));
  };

  const botList = armyBots.map((bot) => (
    <div key={bot.id}>
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <button onClick={() => handleReleaseBot(bot.id)}>Release</button>
      <button onClick={() => handleRemoveBot(bot.id)}>x</button>
    </div>
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botList}
          {botList.length === 0 ? <h1>Bot Army is empty</h1> : null}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
