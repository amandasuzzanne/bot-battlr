import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import BotClassFilter from './components/BotClassFilter';
import BotArmy from './components/BotArmy';


function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  // Setting the initial state of the filteredBy to null since it is being used to track a single filter section
  // const [filteredBy, setFilteredBy] = useState(null);
  const [enlistedClasses, setEnlistedClasses] = useState([]);


  // Fetching the bots data from the server
  // useEffect(() => {
  //   fetch("../db.json")
  //     .then(response => response.json())
  //     // .then(data => setBots(data.bots));
  //     .then(data => {
  //       console.log("Fetched bots:", data.bots); // Log fetched bots
  //       setBots(data.bots);
  //     })
  //     .catch(error => console.error("Error fetching bots:", error)); // Log fetch error
  // }, []);
  useEffect(() => {
    fetch("../db.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched data:", data); // Log fetched data
        setBots(data.bots);
      })
      .catch(error => console.error("Error fetching data:", error)); // Log fetch error
  }, []);

  // Enlist bot functionality
  const enlistBot = (botId) => {
    const botToEnlist = bots.find(bot => bot.id === botId);
    // Ensuring that only one bot from each class is enlisted
    if (!enlistedClasses.includes(botToEnlist.bot_class)) {
      setEnlistedBots([...enlistedBots, botToEnlist]);
      setEnlistedClasses([...enlistedClasses, botToEnlist.bot_class]);
    }
  };

  // Release bot functionality
  const releaseBot = (botId) => {
    const updatedEnlistedBots = enlistedBots.filter(bot => bot.id !== botId);
    setEnlistedBots(updatedEnlistedBots);
  };

  const handleFilter = (botClass) => {
    const filteredBots = botClass
    ? bots.filter(bot => bot.bot_class === botClass)
    : bots;
    setBots(filteredBots);
    // setFilteredBy(botClass);
  }

  const selectBot = (botId) => {
    const botToAdd = bots.find(bot => bot.id === botId);
    const botClassToAdd = botToAdd.bot_class;
    if (!enlistedClasses.includes(botClassToAdd)) {
      setEnlistedBots([...enlistedBots, botToAdd]);
      setEnlistedClasses([...enlistedClasses, botClassToAdd]);
    }
  };


  console.log("Current bots:", bots); // Log current bots

  return (
    <div className="App">
      <div className="top-container">
        <BotClassFilter classes={enlistedClasses} handleFilter={handleFilter} />
        <BotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} />
      </div>
      <div className="bottom-container">
        <BotCollection bots={bots} enlistBot={enlistBot} selectBot={selectBot}/>
      </div>
    </div>
  );
}

export default App;
