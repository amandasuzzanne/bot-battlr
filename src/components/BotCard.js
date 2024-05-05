import React from 'react'
import "./BotCard.css"

const botClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
};

function BotCard({ bot, clickEvent, deleteBot }) {
    return (

        <div className='ui column'>
            <div className='bot-card' key={bot.id} onClick={() => clickEvent(bot)}>
                <div className='bot-image'>
                    <img alt='an image of a bot' src={bot.avatar_url} />
                </div>

                <div className='main-content'>
                    <div>
                        {bot.name}
                        <i className={botClasses[bot.bot_class]} />
                    </div>
                    <div>
                        <small>{bot.catchphrase}</small>
                    </div>
                </div>

                <div className='other-content'>
                    <span>
                        <i className="icon heartbeat" />
                        {bot.health}
                    </span>
                    <span>
                        <i className="icon lightning" />
                        {bot.damage}
                    </span>
                    <span>
                        <i className="icon shield" />
                        {bot.armor}
                    </span>
                    <span>
                        <div className="ui center aligned segment basic">
                            <button className="ui mini red button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    deleteBot(bot);
                                }}
                            > X
                            </button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BotCard;