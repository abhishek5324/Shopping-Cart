import React from 'react';
import CartItem from "./CartItem";
import './index.css';

class Cart extends React.Component {
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
                qty: 1,
                img: '',
                id: 1
                },
                {
                price: 99,
                title: "Watch",
                qty: 1,
                img: '',
                id: 2
                },
                {
                price: 1500,
                title: "Laptop",
                qty: 1,
                img: '',
                id: 3
                }
            ]
        }
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
    };
 
    render() { 
        const {products} = this.state;
        return ( 
            <div className="cart">
            {/* <CartItem />
            <CartItem />
            <CartItem /> */}
           { products.map((product) => {
               return (
               <CartItem 
               product={product} 
               key={product.id} 
               onIncrease={this.handleIncrease}
               onDecrease={this.handleDecraese}
               onDelete={this.handleDelete}    
               /> )
            }) }

            </div>
         );
    }
}
 
export default Cart;