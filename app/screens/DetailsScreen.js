import React, { createContext, useReducer } from "react";
import { StyleSheet } from "react-native";
import colors from "../consts/colors";
import foods from "../consts/foods";
import { reducer } from "./reducer";
import DetailsS from "./DetailsS";
export const detailsContext = createContext();

const initailState = {
  item: foods,
  totalAmount: 0,
  totalItem: 0,
};

const DetailsScreen = ({ navigation, route }) => {
  const [state, dispatch] = useReducer(reducer, initailState);
  const ditem = route.params;

  const like = (id) => {
    return dispatch({
      type: "LIKE",
      payload: id,
    });
  };

  return (
    <detailsContext.Provider value={{ ...state, like }}>
      <DetailsS navigation={navigation} ditem={ditem} />
    </detailsContext.Provider>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: colors.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: colors.white,
  },
});

export default DetailsScreen;
