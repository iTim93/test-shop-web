import React from 'react';
import logo from './logo.svg';
import './App.css';

const colors = ["красный","зеленый","синий"]
const shoes = [
  {
    name:"sneakers", 
    color: colors [0],
    price: 500
  },
  {
  name:"mars", 
  color: colors [1],
  price: 300
  },
  {
    name:"twix", 
    color: colors [2],
    price: 700
    },
]

function App() {
  return (
    <div className="App">
    <main role="main">
      <div class="jumbotron">
        <h1 class="card-title" id="main-text" onclick="gotoU()">OLIVE</h1>
        <div class="row">
          <div class="col-md-3 btn-light" onclick="gotoU()">Меню</div>
          <div class="col-md-3 btn-light">Товары</div>
          <div class="col-md-5 btn-light">Контакты</div>
          <div class="col-md-3 btn-light"></div>
        </div>
      </div>
      <div class="container">
        <input type="text" class="form-control search-input" placeholder="Введите товар"></input>
      </div>
      <div class="container">
        <div class="row">
        {
          shoes.map((item)=>{
          return (
            <div class="col-md-4">
              <h2  class="shoe-title">{item.name}</h2>
              <img
                class="img-thumbnail"
                src="https://www.bowlingshirt.com/custom-shirts-by-interest/corporate-events/twix.jpg"
              />
              <p>{item.color}</p>
              <p>{item.price}</p>
            </div>
          )
        })
        }
        </div>
        </div>
        </main>
    <footer class="container">Copyright ©2020 Cool Developer</footer>

    </div>
  );
}

export default App;
