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
   
    render() { 
        const {products} = this.state;
        return ( 
            <div className="cart">
            {/* <CartItem />
            <CartItem />
            <CartItem /> */}
           { products.map((product) => {
               return <CartItem product={product} key={product.id} />
            }) }

            </div>
         );
    }
}
 
export default Cart;