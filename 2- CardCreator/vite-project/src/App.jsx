import "./App.css";
import "./Card.css";

function App() {
  const cards = [
    { title: "Card 1", content: "content-1" },
    { title: "Card 2", content: "content-2" },
    { title: "Card 3", content: "content-3" },
    { title: "Card 4", content: "content-4" },
    { title: "Card 5", content: "content-5" },
  ];
  return (
    <>
      <div className="card-container">
        <div className="card">
          <h1>Title: Card 1</h1>
          <p>Content: Content 1</p>
        </div>
      </div>
    </>
  );
}

export default App;
