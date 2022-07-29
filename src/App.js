import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default App;