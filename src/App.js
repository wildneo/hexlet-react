import React from 'react';
import BtnGroup from './BtnGroup/BtnGroup';
// import Carousel from './Carousel/Carousel';
import Collapse from './Collapse/Collapse';
import ChangeLog from './ChangeLog/ChangeLog';
import TodoBox from './ToDo/TodoBox';
import Card from './Card/Card';
import Component from './Modal/Component';
import MarkdownEditor from './MarkdownEditor/MarkdownEditor';
import './App.css';
// import logo from './logo.svg';

function App() {
  // const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg'];
  const text = 'collapse me';

  return (
    <>
      <div className="container m-3">
        <MarkdownEditor onContentChange={console.log} />
      </div>
      <div className="container m-3">
        <Component />
      </div>
      <div className="container m-3">
        <Card>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Text</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="container m-3">
        <TodoBox />
      </div>
      <div className="container m-3">
        <ChangeLog />
      </div>
      <div className="container m-3">
        <BtnGroup />
      </div>
      <div className="container m-3">
        <Collapse text={text} />
      </div>
      {/* <div className="container m-3">
        <Carousel images={images} />
      </div> */}
    </>
  );
}

export default App;
