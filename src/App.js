
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'
import './index.css';
import firebase from 'firebase';

class App extends  React.Component {



  constructor()
  {
      super();
      this.state = 
      {
          products:[],
          loading:true
      }
  }


  componentDidMount()
  {
    firebase
      .firestore()
      .collection('products')
      .get()
      .then((snapshot) => {
       snapshot.docs.map((doc) => {
         console.log(doc.data());
       });

       const products = snapshot.docs.map((doc) => {
         const data = doc.data();
         data['id'] = doc.id;

         return data;
       })

       this.setState({products});
      })
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
    const {loading} = this.state;
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
      {loading && <h1>Loading ...</h1>}
      <div>Total: {this.getTotal()}</div>
    </div>
    
  );
}
  
}

export default App;
