import logospring from "./logospring.png";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logospring} className="App-logospring" alt="logospring" />
      <h1 id="question">
          For which city would you like to get the weather?
      </h1>
      </header>
      <WeatherSearch defaultCity="Paris"/>
      <div className="container">
      <Footer />
      </div>
    </div>
  );
}

export default App;
