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
        <footer className="App-footer">
          Coded by Jennie Chen and{" "}
          <a
            href="https://github.com/JennieCodes/react-dictionary-project.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on Github
        </footer>
      </div>
    </div>
  );
}
