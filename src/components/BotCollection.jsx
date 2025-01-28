import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";  

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCollection({ addBotToArmy }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const handleBotClick = (bot) => {
    console.log("Clicked bot:", bot);
    addBotToArmy(bot); // Call the function passed from App.jsx
  };

  const botCards = bots.map((bot) => (
    <div key={bot.id} onClick={() => handleBotClick(bot)}>
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
    </div>
  ));

  return (
    <div>
      <h1>Bot Collection</h1>
      <div className="ui four column grid">
        <div className="row">
          {botCards}
        </div>
      </div>
    </div>
  );
}

export default BotCollection;
