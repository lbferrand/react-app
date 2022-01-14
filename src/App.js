import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">Building application with React.js</header>
      <h1>Weather Application</h1>
      <h4>Please enter a city's name inside the field</h4>
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
