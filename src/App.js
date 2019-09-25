import React from 'react';
import Alert from './Alert/Alert';
import './App.css';
// import logo from './logo.svg';

function App() {
  return (
    <div id="container" className="container m-3">
      <Alert type="warning" text="what is love?" />
    </div>
  );
}

export default App;
