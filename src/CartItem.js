import React from 'react';
// import './index.css';

class CartItem extends React.Component{

    constructor()
    {
        super();
        this.state = {
            price: 999,
            title: "Mobile Phone",
            qty: 1,
            img: ''
        }
    }
    render(){

        const {price,title,qty} = this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: 'grey'}}>{price}</div>
                    <div style={{color: 'grey'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1237/1237946.svg?token=exp=1620541561~hmac=aa7221343631a2e55e50ae1dd40b4943" alt="increase" className="action-icons" />
                        <img src="https://www.flaticon.com/svg/vstatic/svg/56/56889.svg?token=exp=1620541647~hmac=6e2990ea6a73f11af96c97584b370432" alt="decrease" className="action-icons" />
                        <img src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1620541699~hmac=8311ae9d9f141ed62ed0fcaa1f9443f1" alt="delete" className="action-icons" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;