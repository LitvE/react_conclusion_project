//import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';

// class / function


//самый простой функциональный компонент
/*function App() {
  return null;
}*/

//самый простой классовый компонент
/*
class App extends React.Component {
  render () {
    return null;
  };
}*/

class App extends React.Component {
  render () {
    return (
      <Fragment>
        <h1>sdfsdfsdfsdf</h1>
        <p>10+2</p>
        <p>{10+2}</p>
        <p>
          {10+2} and some {2+2}
        </p>
        <p id={2+1}>text1</p>
        <p id={2+2}>text2</p>
        <p id={2+3}>text3</p>
      </Fragment>
    );
  };
}

export default App;
