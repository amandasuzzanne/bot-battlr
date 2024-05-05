import React from 'react'
import "./BotCard.css"

function BotCard({bot, action, buttonText}) {
  return (
    <div className="bot-card">
        <img src={bot.avatar_url} alt={bot.name} />
        <div className="bot-details">
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <button onClick={action}>{buttonText}</button>
        </div>
    </div>
  );
}

export default BotCard;