import React from 'react';
// import { CardContext } from '../context/CardContext';
import { connect } from 'react-redux';
import { addToCart, minusFromCart, removeFromCart } from '../redux/actions/cartAction'


function ListProductsInCart({ dispatch, totalPrice, products }) {
  // const { card, updateCard, deleteProductInCard } = useContext(CardContext);
  // var priceArr = [...card.values()].map(a => a.price.slice(1) * a.count);
  // var totalPrice = priceArr.reduce((a, b) => a + b, 0) || 0;


  return (
    <div className="h-100">
      {products.map(product => (
        <div key={product._id} className="card-item">
          <div className="img-box">
          <img src={product.img} alt="products" />
          </div>
          <div className="card-item-content">
            <div>Name Products: {product.name}</div>
            <div>Price: {product.price}</div>
            <div>Count :
              <button onClick={() => dispatch(minusFromCart(product._id))}>-</button>{product.count}
              <button onClick={() => dispatch(addToCart(product))}>+</button></div>
          </div>
          <div> <button onClick={() => dispatch(removeFromCart(product._id))}>X</button></div>
        </div>
      ))
      }
      <div className="ml-4 position-fixed bottom ">Total Price: {totalPrice}</div>
    </div>
  )

}

function mapStateToProps(state) {
  var products = Array.from(state.cart.products.values());
  var listPrice = products.map(p => p.price.slice(1) * p.count)
  return {
    totalPrice: listPrice.length > 0 ? listPrice.reduce((a, b) => a + b) : 0,
    products
  }
}

export default connect(mapStateToProps)(ListProductsInCart)