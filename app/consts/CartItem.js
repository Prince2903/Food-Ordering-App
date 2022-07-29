import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "./colors";
function cartItem({ item, increament, decreament }) {
  return (
    <View style={style.cartCard}>
      <Image
        source={item.image}
        style={{ borderRadius: 5, height: 80, width: 80 }}
      />
      <View
        style={{
          height: 100,
          marginLeft: 10,
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 13, color: colors.grey }}>
          {item.ingredients}
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>₹ {item.price}</Text>
      </View>
      <View style={{ marginRight: 20, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {item.quantity}
        </Text>
        <View style={style.actionBtn}>
          <Icon
            name="remove"
            size={25}
            color={colors.white}
            style={{ marginTop: 2, marginRight: 6 }}
            onPress={() => decreament(item)}
          />
          <Icon
            name="add"
            size={25}
            color={colors.white}
            style={{ marginTop: 2, marginLeft: 6 }}
            onPress={() => increament(item)}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default cartItem;
