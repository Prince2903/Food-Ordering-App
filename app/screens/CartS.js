import React, { createContext, useReducer } from "react";
import foods from "../consts/foods";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initailState = {
  item: foods,
  totalAmount: 0,
  totalItem: 0,
};

function CartS({ navigation }) {
  const [state, dispatch] = useReducer(reducer, initailState);

  const increment = (id) => {
    //console.log("Incrementing!");
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };


  return (
    <CartContext.Provider value={{ ...state, increment, decrement }}>
      <ContextCart navigation={navigation} />
    </CartContext.Provider>
  );
}

export default CartS;
