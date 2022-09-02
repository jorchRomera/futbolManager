import React from "react";
import { Alert, Button, FlatList, Image, StyleSheet, View, Text } from "react-native";

const DATA = [
  {
    id: 1,
    name: 'Jorch', 
    payed: true,
  },
  {
    id: 2,
    name: 'Mumo', 
    payed: false,
  },
  {
    id: 3,
    name: 'Emilio', 
    payed: true,
  },
  {
    id: 4,
    name: 'Gabe', 
    payed: false,
  },
  {
    id: 5,
    name: 'Marian', 
    payed: true,
  },
]



const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Equipo A</Text>
    <Text>Control de pagos | Fecha 1</Text>
    <View>
      <View>
        <Text>#</Text>
        <Text>Nombre</Text>
      </View>
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
    <View>
      <Button
        title="back button"
        onPress={() => Alert.alert("back button pressed")}
      >
        <Image source={require("../../../assets/images/back-arrow.png")} />
      </Button>
      <Button
        title="confirm button"
        onPress={() => Alert.alert("confirm button pressed")}
      >
        <Image source={require("../../../assets/images/confirm-arrow.png")} />
      </Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
