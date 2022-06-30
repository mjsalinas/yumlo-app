import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, TextField } from "react-native-ui-lib";

const PagoAsesoria = () => {
  const styles = StyleSheet.create({
    input: {
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 15,
      height: 50,
      borderRadius: 15,
      borderColor: "#afd479",
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 15,
      marginTop: 10,
    },
    button: {
      height: 50,
      borderRadius: 15,
      backgroundColor: "#afd479",
      marginTop: 10,
    },
    DatePicker: {
      height: 50,
      borderRadius: 15,
      backgroundColor: "gray",
      color: "white",
      marginTop: 10,
    },
  });
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={["#afd479", "#799f0c"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <Image
        source={require("../../../assets/tarjeta.png")}
        style={{
          width: 160,
          height: 160,
          position: "absolute",
          marginTop: 90,
          marginLeft: 130,
          zIndex: 1,
        }}
      />
      <View
        style={{
          height: 400,
          paddingTop: 50,
          padding: 15,
          marginTop: 180,
          borderRadius: 40,
          backgroundColor: "white",
        }}
      >
        <TextField
          migrate
          placeholder="Numeros de Tarjeta"
          style={styles.input}
          onChangeText={(value) => setUsuario(value)}
        />
        <TextField
          migrate
          placeholder="Titular de Tarjeta"
          style={styles.input}
          onChangeText={(value) => setUsuario(value)}
        />
        <TextField
          migrate
          placeholder="CVV"
          style={styles.input}
          onChangeText={(value) => setUsuario(value)}
        />
        <TextField
          migrate
          placeholder="Fecha Vencimiento"
          style={styles.input}
          onChangeText={(value) => setUsuario(value)}
        />
        <Button style={styles.button} onPress={() => {}}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Realizar Pago
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default PagoAsesoria;
