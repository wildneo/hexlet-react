import React from 'react';
import BtnGroup from './BtnGroup/BtnGroup';
import Carousel from './Carousel/Carousel';
import './App.css';
// import logo from './logo.svg';

function App() {
  const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg'];

  return (
    <>
      <div className="container m-3">
        <BtnGroup />
      </div>
      <div className="container m-3">
        <Carousel images={images} />
      </div>
    </>
  );
}

export default App;
