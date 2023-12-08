import "./App.css";
import "./Card.css";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1", content: "content-1" },
  ]);

  const cardGenerator = () => {
    const newObject = {
      title: `Card ${cards.length + 1}`,
      content: `content ${cards.length + 1}`,
    };
    setCards([...cards, newObject]);
  };
  return (
    <>
      <div className="app">
        <button onClick={cardGenerator}>Card Generator</button>
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
