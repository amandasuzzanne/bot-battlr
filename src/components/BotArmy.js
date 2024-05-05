import React from 'react'
import "./BotArmy.css"
import BotCard from './BotCard';

function BotArmy({bots, removeBot, deleteBot}) {
    const botArmyItem = bots.map((bot) => {
        return (
          <BotCard
            key={bot.id}
            bot={bot}
            clickEvent={removeBot}
            deleteBot={deleteBot}
          />
        );
      });
    
      return (
        <div className="ui segment inverted olive bot-army">
          <div className="ui five column grid">
            <div className="row bot-army-row">
              {botArmyItem}
            </div>
          </div>
        </div>
      );
    }

export default BotArmy;