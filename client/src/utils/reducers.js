import { useReducer } from "react";
import {
  UPDATE_MATTRESSES,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_VENDORS,
  UPDATE_CURRENT_VENDOR,
  CLEAR_CART,
  TOGGLE_CART
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MATTRESSES:
      return {
        ...state,
        mattresses: [...action.mattresses],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.mattress],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.mattresses],
      };

    case UPDATE_CART:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(mattress => {
          if (action._id === mattress._id) {
            mattress.purchaseQuantity = action.purchaseQuantity
          }
          return mattress
        })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(mattress => {
        return mattress._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_VENDORS:
      return {
        ...state,
        vendors: [...action.vendors],
      };

    case UPDATE_CURRENT_VENDOR:
      return {
        ...state,
        currentVendor: action.currentVendor
      }

    default:
      return state;
  }
};

export function useMattressReducer(initialState) {
  return useReducer(reducer, initialState)
}