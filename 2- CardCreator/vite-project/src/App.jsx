import "./App.css";
import "./Card.css";
import Card from "./Card";
import { useState } from "react";
import Form from "./Form";

function App() {
  const [cards, setCards] = useState([]);

  const cardGenerator = (name, age) => {
    const newObject = {
      title: `Name: ${name}`,
      content: `Age: ${age}`,
    };
    setCards([...cards, newObject]);
  };
  return (
    <>
      <Form cardGenerator={cardGenerator} />
      <div className="app">
        <div className="card-container">
          {cards.map((card, index) => {
            return (
              <Card key={index} title={card.title} content={card.content} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
