// feature 1
import React, {Component} from 'react'
import Filter from './Components/Filter';
import Products from './Components/Products';
import data from './data.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
  }

  sortProducts = (e) => {
    const sort = e.target.value
    console.log(e.target.value)
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => (
        sort === "lowest" ?
          ((a.price < b.price) ? 1 : -1) :
        sort === "heighest" ?
          ((a.price > b.price) ? 1 : -1):
          ((a._id < b._id) ? 1 : -1)
        
      ))
    }))
  }

  filterProducts = (e) => {
    if (e.target.value === "") {
      this.setState({ size: e.target.value , products: data.products })
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter((product) => product.availableSizes.indexOf(e.target.value) >= 0),
      });
    }
  };
  
  render() {
    return ( 
      <div className = "grid-container" >
        <header>
          <a href="/" > React Shopping Cart </a> 
        </header>

        <main >
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length} 
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">
              cartItem
            </div>
          </div>
        </main>

        <footer>
          All Right Is Resere 
        </footer> 
      </div>
  );
  }
}

export default App;
