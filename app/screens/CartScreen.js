import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../consts/colors";
import foods from "../consts/foods";
import { PrimaryButton } from "../components/Button";

const CartScreen = ({ navigation }) => {
  function increament(item) {
    return dispatch({
      type: "INCREAMENT",
      payload: item.id,
    });
  }
  function decreament(item) {}
  const CartCard = ({ item }) => {
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            ₹ {item.price}
          </Text>
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
  };
  const Cart = () => {
    return (
      <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
        <View style={style.header}>
          <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cart</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          data={foods}
          renderItem={({ item }) => <CartCard item={item} />}
          ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
          ListFooterComponent={() => (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 15,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Total Price
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>₹ 50</Text>
              </View>
              <View style={{ marginHorizontal: 30 }}>
                <PrimaryButton title="CHECKOUT" />
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    );
  };
  return Cart();
};
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

export default CartScreen;
