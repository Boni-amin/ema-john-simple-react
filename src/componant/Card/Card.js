import React from 'react';
import './Card.css'

const Card = (props) => {
    // console.log(props)
    const { card } = props;
    let quantityTotal = 0;
    let total = 0;
    for (const product of card){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        quantityTotal = quantityTotal + product.quantity;
    }
    const shipping = total > 0? 15 : 0 ;
    const tax = (total + shipping) * 0.10;
    const orderTotal = total + shipping + tax;

    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Total Order Items: {quantityTotal}</h5>
            <p>Toatl Amount: ${total.toFixed(2)}</p>
            <p>Shipping & Handling: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Order Toatal: ${orderTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Card;