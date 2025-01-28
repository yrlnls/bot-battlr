import React from "react";

function YourBotArmy({ bots = [], removeBot, dischargeBot }) {
  console.log("Your Army Bots:", bots); // Debugging log

  const handleRemoveBot = (botId) => {
    removeBot(botId);
  };

  const handleDischargeBot = (botId) => {
    dischargeBot(botId);
  };

  const botList = bots.map((bot) => (
    <div key={bot.id}>
      <h3>{bot.name}</h3>
      <button onClick={() => handleDischargeBot(bot.id)}>x</button>
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
