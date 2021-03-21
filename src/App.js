import logospring from "./logospring.png";
import Search from "./Search";
import Footer from "./Footer";
import DateTime from "./DateTime";


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logospring} className="App-logoperso" alt="logoperso" />
        <DateTime/>
      </header>
      <Search />
      <div className="container">
            <Footer />
      </div>
    </div>
  );
}

export default App;
