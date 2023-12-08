import "./App.css";
import Card from "./Card";
import "./Card.css";

function App() {
  const cards = [
    { id: 1, title: "Card 1", content: "content-1" },
    { id: 2, title: "Card 2", content: "content-2" },
    { id: 3, title: "Card 3", content: "content-3" },
    { id: 4, title: "Card 4", content: "content-4" },
    { id: 5, title: "Card 5", content: "content-5" },
  ];

  const cardGenerator = () => {
    cards.push({ title: "Card Title", content: "Content" });
  };
  return (
    <>
      <div className="card-container">
        {cards.map((card) => {
          return (
            <Card key={card.id} title={card.title} content={card.content} />
          );
        })}
      </div>
      <button onClick={cardGenerator}>Card Generator</button>
    </>
  );
}

export default App;
