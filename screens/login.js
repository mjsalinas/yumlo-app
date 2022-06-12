import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, TextField } from "react-native-ui-lib";

const Login = ({navigation}) => {
  const styles = StyleSheet.create({
    input: {
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
    },
    button: {
      height: 50,
      borderRadius: 15,
      backgroundColor: "#afd479",
      marginTop: 10,
    },
  });

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        padding: 15,
      }}
    >
      <LinearGradient
        colors={["#dfdcc0", "#afd479"]}
        style={{
          position: "absolute",
          left: -90,
          right: 150,
          top: -150,
          height: "45%",
          borderRadius: 400 / 2,
        }}
      />
      <View
        style={{
          flexDirection: "column",
          flex: 0.3,
          padding: 5,
          textAlign: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Bienvenido</Text>
        <Text style={{ fontSize: 20 }}>Inicia Sesion</Text>
        <Image
          source={require("../assets/user.png")}
          style={{
            width: 120,
            height: 120,
            borderRadius: 400 / 2,
            marginTop: 30,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "column",
          flex: 0.3,
          padding: 5,
        }}
      >
        <TextField placeholder="Usuario" style={styles.input} />
        <TextField placeholder="Contraseña" style={styles.input} />
      </View>

      <View
        style={{
          flexDirection: "column",
          flex: 0.3,
          padding: 5,
        }}
      >
        <Button style={styles.button} onPress={() => navigation.navigate("Dashboard")}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Iniciar</Text>
        </Button>
        <Button style={styles.button} onPress={() => navigation.navigate("Registro")}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Registrarme
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Login;
