import React from 'react';

const ProductReview = (props) => {
    const {name, price, key, quantity } = props.product;
    const {handleRemove} = props;
    return (
        <div>
            <p className='product-name'>{name}</p>
            <p>price: {price}</p>
            <p>quantity: {quantity}</p>
            <button className='add-card' onClick={()=> handleRemove(key)} >Remove</button>
        </div>
    );
};

export default ProductReview;