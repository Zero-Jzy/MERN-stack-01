import {
  ADD_TO_CART,
  MINUS_FROM_CART,
  REMOVE_FROM_CART
} from './types'

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const minusFromCart = idProduct => {
  return {
    type: MINUS_FROM_CART,
    payload: idProduct
  };
};

export const removeFromCart = idProduct => {
  return {
    type: REMOVE_FROM_CART,
    payload: idProduct
  };
};
