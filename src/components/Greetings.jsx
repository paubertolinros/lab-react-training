import React from 'react';

const Greetings = (greeting) => {
  const { lang, children } = greeting;
  let langGreeting = "";
  switch (lang) {
    case "en":
      langGreeting = "Hello";
      break;
    case "es":
      langGreeting = "Hola";
      break;
    case "de":
      langGreeting = "Hallo";
      break;
    case "fr":
      langGreeting = "Bonjour";
      break;
    default:
      langGreeting = "Hi"
      break;
  }
  return (
    <section className="user-section">
      <p>{langGreeting} {children}</p>
    </section>
  )
}

export default Greetings;