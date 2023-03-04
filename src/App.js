import React from 'react';
import './App.css';
//import { masterImage } from './assets/images/master-card.svg'
import idCardData from './data/idCardData.json';
import greetings from './data/greetings.json';
import creditCardData from './data/creditCardData.json';
import IdCard from './components/IdCard.jsx';
import IdCard2 from './components/IdCard2.jsx';
import Greetings from './components/Greetings.jsx';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColor.jsx';
import CreditCard from './components/CreditCard.jsx';
import Rating from './components/Rating.jsx';
import DriverCard from './components/DriverCard.jsx';
import LikeButton from './components/LikeButton.jsx';
import ClickablePicture from './components/ClickablePicture.jsx';

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
      <Random min={1} max={6} />
      <Random min={1} max={100} />
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
      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h1>Driver Card</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
      <h1>Like Button</h1>
      <div className="buttons-section">
        <LikeButton />
        <LikeButton />
      </div>
      <h1>Clickable Picture</h1>
      <ClickablePicture img='maxence.png' imgClicked='maxence-glasses.png' />
    </div>
  );
}

export default App;
