import {
  ADD_TO_CART,
  MINUS_FROM_CART,
  REMOVE_FROM_CART
} from '../actions/types';

var dataInLocalStore = localStorage.getItem('myCard') || null;
var initialState = { products: new Map(JSON.parse(dataInLocalStore)) }

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state.products, action.payload)
    case MINUS_FROM_CART:
      return minusFromCart(state.products, action.payload)
    case REMOVE_FROM_CART:
      return removeFromCart(state.products, action.payload)
    default:
      return state;
  }
}

function addToCart(cart, product) {
  var { _id } = product;
  if (cart.has(_id)) {
    var { count } = cart.get(_id);
    cart.set(_id, { ...product, count: count + 1 })
  } else {
    cart.set(_id, { ...product, count: 1 })
  }
  localStorage.setItem('myCard', JSON.stringify([...cart]));
  return {products:cart};
}

function minusFromCart(cart, _id) {
  if (cart.has(_id)) {
    var product = cart.get(_id);
    if (product.count > 1) {
      cart.set(_id, { ...product, count: product.count - 1 })
    } else {
      cart.delete(_id)
    }
  }
  localStorage.setItem('myCard', JSON.stringify([...cart]));
  return {products:cart};
}

function removeFromCart(cart, _id) {
  if (cart.has(_id)) {
    cart.delete(_id)
  }
  localStorage.setItem('myCard', JSON.stringify([...cart]));
  return {products:cart};
}