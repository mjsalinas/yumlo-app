import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, TextField } from "react-native-ui-lib";
import { selectUser, setUser } from "../src/Reducer";

const Login = ({ navigation }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(user)
  })
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

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

  const handleOnPressLogin = () => {
    //login api
    Axios.post("http://192.168.54.1:3000/login", {
      usuario: usuario,
      contrasena: password,
    })
      .then((response) => {
        if (response.data[0].rol == "nutricionista") {
          dispatch(setUser(response.data[0]));
          navigation.navigate("Main", {
            isNutricionista: true,
          });
        } else {
          dispatch(setUser(response.data[0]));
          navigation.navigate("Main", {
            isNutricionista: false,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.data);
        return;
      });
  };

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
        <TextField
          migrate
          placeholder="Usuario"
          style={styles.input}
          onChangeText={(value) => setUsuario(value)}
        />
        <TextField
          migrate
          placeholder="Contraseña"
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <View
        style={{
          flexDirection: "column",
          flex: 0.3,
          padding: 5,
        }}
      >
        <Button
          style={styles.button}
          onPress={() => {
            handleOnPressLogin();
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Iniciar</Text>
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Registro")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Registrarme
          </Text>
        </Button>
      </View>
    </View>
  );
};
export default Login;
