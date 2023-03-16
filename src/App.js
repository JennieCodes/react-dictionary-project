import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Pocket Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Jennie Chen</footer>
      </div>
    </div>
  );
}

export default App;
