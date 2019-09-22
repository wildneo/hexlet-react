import React from 'react';
import Definitions from './Definitions/Definitions';
import './App.css';
// import logo from './logo.svg';

const definitions = [
  { dd: 'one', dt: 'two' },
  { dd: 'another term', dt: 'another description' },
];

function App() {
  return (
    <div id="container" class="container m-3">
      <Definitions data={definitions}/>
    </div>
  );
}

export default App;
