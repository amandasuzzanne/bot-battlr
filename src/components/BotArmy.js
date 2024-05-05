import React from 'react'
import "./BotArmy.css"

function BotArmy({enlistedBots, releaseBot}) {
  return (
    <div>
        <h2>Bot Army</h2>
        <div className="bot-army">
        {enlistedBots.map(bot => (
            <div key={bot.id}>
                <p>{bot.name}</p>
                <button onClick={() => releaseBot(bot.id)}>Release Bot</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default BotArmy;