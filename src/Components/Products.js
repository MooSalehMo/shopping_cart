import React, { Component } from 'react'
import formatCurrency from '../util'
<<<<<<< HEAD
import Modal from 'react-modal'
import Fade from 'react-reveal/Fade'; 
import Zoom from 'react-reveal/Zoom';
=======
import Fade from 'react-reveal/Fade'; 
import Zoom from 'react-reveal/Zoom'; 
import Modal from 'react-modal'

>>>>>>> 7567650acf192da6fa3102d28af4cdb56a88272a

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null 
    }
  }
  openModal = (product) => {
    this.setState({product})
  }
  closeModal = () => {
    this.setState({product: null})
  }
  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <ul className="products">
            {this.props.products.map( (product) => (
              <li key={product._id} >
                <div className="product">
                  <a href={"#" + product._id} onClick={ () => this.openModal(product)} >
                    <img src={product.image} alt={product.title} ></img> 
                    <p className="title">
                      {product.title}
                    </p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button onClick={ () => this.props.addToCart(product) } className="btn btn-primary" > Add To Cart </button>
                  </div>
                </div>
              </li>
            ))}
          </ul> 
        </Fade>
<<<<<<< HEAD
        {product && (
          <Modal isOpen={true}>
            <Zoom>
              <button className="close-modal fa fa-close" onClick={this.closeModal}></button>
                <div className="product-detials">
                  <img src={product.image} alt={product.title} /> 
=======
        {
          product && (
            <Modal isOpen={true}>
              <Zoom>
                <button className="close-modal fa fa-close" onClick={this.closeModal}></button>
                <div className="product-detials">
                  <img src={product.image} alt={product.title} ></img> 
>>>>>>> 7567650acf192da6fa3102d28af4cdb56a88272a
                  <div className="product-detials-dicription">
                    <strong className="title"><p>{product.title}</p></strong>
                    <p className="decription">{product.decription}</p>
                    <p className="availableSizes">Available Sizes: {" "}
                      {
                        product.availableSizes.map(x =>
                      (
                      <span>
                        {" "} 
                        <button className="button" >{x}</button>
                      </span>
                      )
                      )}
                    </p>
                    <div className="product-price">
                      <div className="">{formatCurrency(product.price)}</div>
                      <button className="btn btn-primary" onClick={() => {
                        this.props.addToCart(product)
                        this.closeModal();
                      }} >
                        add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Zoom>
            </Modal>
          )
        }
      </div>
    )
  }
}