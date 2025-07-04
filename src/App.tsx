import React from 'react';
import './App.css';
import Board from './components/Board';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Noughts & Crosses</h1>
      <Board />
    </div>
  );
}

export default App;
