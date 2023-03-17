import "./App.css";
import logo from "./logo-nobg.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <br />
          Pocket Dictionary
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Jennie Chen</footer>
      </div>
    </div>
  );
}
