import React from "react";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection";
import "./index.css";

function App() {
  const [armyBots, setArmyBots] = React.useState([]);

  const addBotToArmy = (bot) => {
    console.log("Adding bot to army:", bot);
    if (!armyBots.some((armyBot) => armyBot.id === bot.id)) {
      setArmyBots([...armyBots, bot]);
    } else {
      console.log("Bot already in army:", bot);
    }
  };

  const removeBotFromArmy = (botId) => {
    console.log("Removing bot from army:", botId);
    setArmyBots(armyBots.filter((bot) => bot.id !== botId));
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <h1>Bot Collection</h1>
      <BotCollection armyBots={armyBots} addBotToArmy={addBotToArmy} removeBotFromArmy={removeBotFromArmy} />
      <h1>Your Bot Army</h1>
      <YourBotArmy bots={armyBots} removeBot={removeBotFromArmy} />
    </div>
  );
}

export default App;
