import React from "react";
import BotCard from "./BotCard";

function YourBotArmy(props) {
  console.log("Your Army Bots:", JSON.stringify(props.bots, null, 2)); // Detailed logging

  const removeBot = (botId) => {
    props.removeBot(botId);
  };

  const dischargeBot = (botId) => {
    props.dischargeBot(botId);
  };

  const bots = props.bots.map((bot) => {
    return (
      <div key={bot.id}>
        <BotCard bot={bot} botFunction={() => removeBot(bot.id)} />
        <button onClick={() => dischargeBot(bot.id)}>x</button>
      </div>
    );
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots}
          {bots.length === 0 ? <h1>Bot Army</h1> : null}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
