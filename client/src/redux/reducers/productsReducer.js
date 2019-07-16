import { FETCH_PRODUCTS, CHANGE_PRICE_FILTER_PRODUCTS, CHANGE_SIZE_FILTER_PRODUCTS, LOADING_PRODUCTS } from '../actions/types';


const initialState = {
  products: [],
  filter: {
    price: {
      start: -Infinity,
      end: Infinity
    },
    size: ['S', 'M', 'L', 'X', 'XL']
  },
  loading:false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case CHANGE_PRICE_FILTER_PRODUCTS:
      return {
        ...state,
        filter: {
          ...state.filter,
          price: {
            start: action.payload.start,
            end: action.payload.end
          }
        }
      }
    case CHANGE_SIZE_FILTER_PRODUCTS:
      return {
        ...state,
        filter: {
          ...state.filter,
          size: action.payload
        }
      }
    case LOADING_PRODUCTS:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
