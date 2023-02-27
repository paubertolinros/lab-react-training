import React from 'react';
import './App.css';
import idCardData from './data/idCardData.json';
import greetings from './data/greetings.json';
import creditCardData from './data/creditCardData.json';
import IdCard from './components/IdCard.jsx';
import IdCard2 from './components/IdCard2.jsx';
import Greetings from './components/Greetings.jsx';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColor.jsx';
import CreditCard from './components/CreditCard.jsx';

function App() {
  return (
    <div className="App">
      <h1 className="titles">Id Card</h1>
      {idCardData.map((user) => {
        return (
          <IdCard key={user._id} user={user} />
        )
      })}
       <h3 className="titles">Id Card 2</h3>
      <IdCard2
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard2
      lastName='Delores'
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
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
      <h1 className="titles">Credit Card</h1>
      <section className="credit-card-container">
      {creditCardData.map((elem) => {
        return (
          <CreditCard key={elem._id} info={elem} />
        )
      })}
      </section>
    </div>
  );
}

export default App;
