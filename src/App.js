import './App.css';
import { useState } from 'react';

import HomePage from './components/HomePage/HomePage';
import Pokedex from './components/Pokedex/Pokedex';

function App() {

  const [off, setOff] = useState(false)

  return (
    <div className="App">
      <HomePage off={off} setOff={setOff} />
      <Pokedex off={off} setOff={setOff} />
    </div>
  );
}

export default App;
