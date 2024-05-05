import React from 'react'
import "./BotCollection.css"
import BotCard from './BotCard'

// Function that will be responsible for listing all available bots
function BotCollection({bots, enlistBot, deleteBot}) {
  return (
    <div>
        <h2>Bot Collection</h2>
        <div className="ui four column grid">
            <div className="row">
                {/* Mapping through the bots array passed as a property and rendering a BotCard for each bot */}
                {bots.map(bot => (
                <BotCard key={bot.id} bot={bot} clickEvent={enlistBot} deleteBot={deleteBot} />
            ))}
            </div>

        </div>
    </div>
  )
}

export default BotCollection;