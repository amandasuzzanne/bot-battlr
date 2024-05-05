import React from 'react'
import "./BotDetails.css"

function BotDetails({bot}) {
  return (
    <div>
        <h2>Bot Details</h2>
        <div>
            <p>ID: {bot.id}</p>
            <p>Name: {bot.name}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            <p>Avatar URL: {bot.avatar_url}</p>
            <p>Created At: {bot.created_at}</p>
            <p>Updated At: {bot.updated_at}</p>
        </div>
    </div>
  )
}

export default BotDetails;