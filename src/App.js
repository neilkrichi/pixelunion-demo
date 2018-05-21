import React, { Component } from 'react'
import shirt1 from './assets/shirt-1.jpg'
import shirt2 from './assets/shirt-2.jpg'
import shirt3 from './assets/shirt-3.jpg'
import star from './assets/star.svg'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: shirt1
    }

    this.handleClick = this.handleClick.bind(this)

  }


  handleClick() {
  }
/*
 renderSoldOut() {
    if (this.state.isClicked) {
      return (
        <div className="soldout-badge">
          <p>Sold Out</p>
        </div>
      )
    }
  }
  */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pixel Union Demo</h1>
          <p className="App-intro">by Neil Krichi</p>
        </header>

        <div className="container">
          <img className="product-img" src={this.state.src} />
          <button className={this.state.display} >Add to Cart</button>

          <div className="swatches">
            <div className="swatch swatch-1" onClick={() => {this.setState({src: shirt1})}}></div>
            <div className="swatch swatch-2" onClick={() => {this.setState({src: shirt2})}}></div>
            <div className="swatch swatch-3" onClick={() => {this.setState({src: shirt3})}}></div>
          </div>

          <p className="product-descrip">Ultrafine Merino T-Shirt</p>

          <p className="product-price">$80.00</p>

        
          <div className="stars">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
          </div>

        </div>



      </div>
    );
  }
}
