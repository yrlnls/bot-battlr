import React from "react";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection";
import "./index.css";

function App() {

  return (
    <div className="App">
      <h1>Bot Collection</h1>
      <BotCollection />
      <h1>Your Bot Army</h1>
      <YourBotArmy />
    </div>
  );
}

export default App;
