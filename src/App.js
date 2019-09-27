import React from 'react';
import BtnGroup from './BtnGroup/BtnGroup';
import Carousel from './Carousel/Carousel';
import Collapse from './Collapse/Collapse';
import './App.css';
// import logo from './logo.svg';

function App() {
  const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg'];
  const text = 'collapse me';

  return (
    <>
      <div className="container m-3">
        <BtnGroup />
      </div>
      <div className="container m-3">
        <Carousel images={images} />
      </div>
      <div className="container m-3">
        <Collapse text={text} />
      </div>
    </>
  );
}

export default App;
