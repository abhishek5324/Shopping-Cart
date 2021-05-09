
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'
import './index.css';

class App extends  React.Component {



  constructor()
  {
      super();
      this.state = 
      {
          products:
          [
              {
              price: 999,
              title: "Mobile Phone",
              qty: 0,
              img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
              id: 1
              },
              {
              price: 99,
              title: "Watch",
              qty: 0,
              img: 'https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=737&q=80',
              id: 2
              },
              {
              price: 1500,
              title: "Laptop",
              qty: 0,
              img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
              id: 3
              }
          ]
      }
  }

  getCount = () => {
    const {products} = this.state;
    let c = 0;
    products.map((product) => {
      c += product.qty;
    } )
    return c;
  }
 getTotal = () => {
   const {products} = this.state;
   let carTotal = 0;
   products.map((product) => {
     carTotal += product.qty * product.price;
   })
   return carTotal;
 }
  handleIncrease = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty += 1;
      this.setState({products:products});

  }

  handleDecraese = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 0)
          return;
      products[index].qty -= 1;
      this.setState(products);
  }

  handleDelete = (id) => {
      const {products} = this.state;
      const items = products.filter((item) => item.id!= id)
      this.setState({products:items});
  }

  render(){
  return (
    <div>
      <Navbar count={this.getCount()} />
      <h1> Cart </h1>
      <Cart 
        products={this.state.products}
        onIncrease={this.handleIncrease}
        onDecrease={this.handleDecraese}
        onDelete={this.handleDelete}    
      />

      <div>Total: {this.getTotal()}</div>
    </div>
  );
  }
}

export default App;
