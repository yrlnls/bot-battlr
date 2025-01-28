import React, { useState, useEffect } from "react";

function YourBotArmy({ bots = [], removeBot }) {
  const [armyBots, setArmyBots] = useState(bots);

  useEffect(() => {
    setArmyBots(bots);
  }, [bots]);

  const handleReleaseBot = (botId) => {
    console.log("Releasing bot:", botId);
    setArmyBots(armyBots.filter((bot) => bot.id !== botId));
  };

  const botList = armyBots.map((bot) => (
    <div key={bot.id}>
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <button onClick={() => handleReleaseBot(bot.id)}>Release</button>
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
