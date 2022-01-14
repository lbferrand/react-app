import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Learn React by building an application
      </header>
      <Weather city="Paris" />
    </div>
  );
}

export default App;
