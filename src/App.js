
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
      this.db = firebase.firestore()
  }


  componentDidMount()
  {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //    snapshot.docs.map((doc) => {
    //      console.log(doc.data());
    //    });

    //    const products = snapshot.docs.map((doc) => {
    //      const data = doc.data();
    //      data['id'] = doc.id;

    //      return data;
    //    })

    //    this.setState({products,loading:false});
    //   })


    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
           snapshot.docs.map((doc) => {
             console.log(doc.data());
           });
    
           const products = snapshot.docs.map((doc) => {
             const data = doc.data();
             data['id'] = doc.id;
    
             return data;
           })
    
           this.setState({products,loading:false});
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
      // products[index].qty += 1;
      // this.setState({products:products});

      const docRef = this.db.collection('products').doc(products[index].id);
      docRef.update({qty: products[index].qty+1})
      .then((s) => {
        console.log("Eddited succesfully");
      })
      .catch((err) => {
        console.log(err);
      })

  }

  handleDecraese = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);

      const docRef = this.db.collection('products').doc(products[index].id);
      if(products[index].qty === 0)
      return;
      docRef.update({qty: products[index].qty-1})
      .then((s) => {
        console.log("Eddited succesfully");
      })
      .catch((err) => {
        console.log(err);
      })
      
  }

  handleDelete = (id) => {
      const {products} = this.state;
      // const items = products.filter((item) => item.id!= id)
      // this.setState({products:items});

      const docRef = this.db.collection('products').doc(id);
      docRef.delete()
      .then(() => {
        console.log("delete successful");
      })
      .catch((err) => {
            console.log(err);
      })
  }
  addProduct = () => {
    this.db
    .collection('products')
    .add({
      img:'',
      price:200,
      qty: 0,
      title: 'fridge'
    })
    .then((docref) => {
      console.log("Product added");
    })
    .catch(err => {
      console.log(err);
    })
  }
  render(){
    const {loading} = this.state;
  return (
  
    <div>
      <Navbar count={this.getCount()} />
      <button onClick={this.addProduct}>Add Product</button>
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
