import React from 'react';
import logo from './logo.svg';
import './App.css';
import Collapsible from 'react-collapsible'
import Products from './Products'
import Fruits from './Fruits';
import Vegetables from './Vegetables'


class App extends React.Component {

  render() {


      return(
      <div>
          <h1 id="title">Welcome to Greens Kiosk</h1>
          <p>We sell fruits and vegetables</p>
          <h2>Products</h2>
          <Collapsible trigger = "Click to view products list" >

          <ul id="products"><Products /></ul>
          </Collapsible><h2>Fruits</h2>
          <Collapsible trigger = "Click to view fruits list">
            <ul id="fruList"><Fruits/></ul>

          </Collapsible><h3>Vegetables</h3>
          <Collapsible trigger = "Click to view veggie list">
            <ul id="vegList">

                <Vegetables />

            </ul>
          </Collapsible>
      </div>


      )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}




export default App;