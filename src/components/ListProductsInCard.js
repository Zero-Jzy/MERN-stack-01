import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';


export default function () {
  const { card, updateCard, deleteProductInCard } = useContext(CardContext);
  var priceArr = [...card.values()].map(a => a.price.slice(1) * a.count);
  var totalPrice = priceArr.reduce((a, b) => a + b, 0) || 0;
  return (
    <div className="h-100">
      {[...card.values()].map(product => (
        <div key={product.id} className="card-item">
          <img src={product.img} alt="products" />
          <div className="card-item-content">
            <div>Name Products: {product.name}</div>
            <div>Price: {product.price}</div>
            <div>Count :<button onClick={() => updateCard({ product }, false)}>-</button>{product.count}<button onClick={() => updateCard({ product })}>+</button></div>
          </div>
          <div> <button onClick={() => deleteProductInCard(product.id)}>X</button></div>
        </div>
      ))
      }
      <div className="ml-4 position-fixed bottom ">Total Price: {totalPrice}</div>
    </div>
  )

}