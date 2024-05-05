import React from 'react'
import {useState, useEffect} from 'react'
import BotArmy from './BotArmy'
import BotCollection from './BotCollection'

function Bots() {
    const [bots, setBots] = useState([]);

    // Function for fetching data from the server
    function fetchBotData() {
        return fetch('http://localhost:3000/bots')
            .then(response => response.json())
            .then(data => {
                setBots(data);
            });
    }

    // Ensuring that the fetch function is executed whenever the page is loaded
    useEffect(() => {
        fetchBotData();
    }, []);

    function enlistBot(bot) {
        setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
    }

    function removeBot(bot) {
        setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
    }

    function deleteBot(bot) {
        const deletedBot = bots.filter((b) => b.id !== bot.id);
        setBots((bots) => deletedBot);
    }

    return (
        <div>
            <h2>Bot Army</h2>
            <BotArmy bots={bots.filter((b) => b.army)}
                removeBot={removeBot}
                deleteBot={deleteBot} />
            <BotCollection bots={bots} enlistBot={enlistBot} deleteBot={deleteBot} />
        </div>
    )
}

export default Bots;