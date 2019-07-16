import {
  FETCH_PRODUCTS,
  CHANGE_PRICE_FILTER_PRODUCTS,
  CHANGE_SIZE_FILTER_PRODUCTS,
  LOADING_PRODUCTS
} from './types';
import axios from 'axios';


export const fetchProducts = () => dispatch => {
  dispatch(loadingProducts()); 
  return axios
    .get('/api/products')
    .then(res => {
      let products = res.data;
      // var dataPrice = products.map(p => parseInt(p.price.slice(1)))

      // if (price) {
      //   products = products.filter(p => {
      //     var priceNe = parseInt(p.price.slice(1))
      //     return priceNe >= price.start && priceNe <= price.end
      //   });
      // }


      // if (size) {
      //   products = products.filter(p =>
      //     _.difference(p.size, size).length < p.size.length
      //   );
      // }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};


export const filterBySize = (size) => {
  return {
    type: CHANGE_SIZE_FILTER_PRODUCTS,
    payload: size
  };
};

export const filterByPrice = (price) => {
  return {
    type: CHANGE_PRICE_FILTER_PRODUCTS,
    payload: price
  };
};

export const loadingProducts = () => {
  return {
    type: LOADING_PRODUCTS
  };
};