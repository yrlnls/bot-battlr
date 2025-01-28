import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

const BotCard = ({ bot, botFunction }) => {
  return (
    <div className={`bot-card ${botTypeClasses[bot.bot_class]}`}>
      <h2>{bot.name}</h2>
      <button onClick={botFunction}>Add to Army</button>
    </div>
  );
};

export default BotCard;
