import logo from './logo.svg';
import './App.css';

import Fixture from './Components/Fixture';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Fixture x="Grupo A"></Fixture>
      <Fixture x="Grupo B"></Fixture>
      <Fixture x="Grupo C"></Fixture>
      <Fixture x="Grupo D"></Fixture>
      </header>
    </div>
  );
}

export default App;
