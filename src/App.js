import React from 'react';
import './App.css';
import idCardData from './data/idCardData.json';
import greetings from './data/greetings.json';
import IdCard from './components/IdCard.jsx'
import Greetings from './components/Greetings.jsx';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColor.jsx'

function App() {
  return (
    <div className="App">
      <h1 className="titles">Id Card</h1>
      {idCardData.map((user) => {
        return (
          <IdCard key={user._id} user={user} />
        )
      })}
      <h1 className="titles">Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h3>Greetings 2</h3>
      {greetings.map((elem, i) => {
        return (
          <Greetings key={i} lang={elem.lang}>{elem.name}</Greetings>
        )
      })}
      <h1 className="titles">Random</h1>
      <Random min={1} max={6}>Random value between 1 and 6 → </Random>
      <Random min={1} max={100}>Random value between 1 and 100 → </Random>
      <h1 className="titles">Box Color</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
