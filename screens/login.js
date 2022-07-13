import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, LogBox  } from "react-native";
import { bindActionCreators } from "redux";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Image, TextField } from "react-native-ui-lib";
import {
  selectUser,
  setUser,
  setAsesorias,
  selectAsesorias,
  setAsesoriasPendientes,
} from "../src/Reducer";
import { API } from "../api";

LogBox.ignoreAllLogs();

const Login = ({ navigation }) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const getAsesorias = (user) => {
    if (user.rol == "nutricionista") {
      Axios.get(API + `/asesoriasNutri/${user.id_usuario}`).then((res) => {
        dispatch(setAsesorias(res.data));
      });
      Axios.get(API + `/asesoriasPendientes/${user.id_usuario}`).then((res) => {
        dispatch(setAsesoriasPendientes(res.data));
      });
    } else {
      Axios.get(API + `/asesoriasPaciente/${user.id_usuario}`).then((res) => {
        dispatch(setAsesorias(res.data));
      });
    }
  };

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
      marginTop: 10,
    },
    button: {
      height: 50,
      borderRadius: 15,
      backgroundColor: "#afd479",
      marginTop: 10,
    },
  });

  const handleOnPressLogin = () => {
    Axios.post(API +"/login", {
      usuario: usuario,
      contrasena: password,
    })
      .then((response) => {
        if (response.data[0].rol == "nutricionista") {
          dispatch(setUser(response.data[0]));
          getAsesorias(response.data[0]);
          navigation.navigate("Main", {
            isNutricionista: true,
          });
        } else {
          dispatch(setUser(response.data[0]));
          getAsesorias(response.data[0]);
          navigation.navigate("Main", {
            isNutricionista: false,
          });
        }
      })
      .catch((error) => {
        return;
      });
  };

  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator={true}
      style={{
        flexDirection: "column",
        flex: 1,
        padding: 10,
      }}
    >
      <LinearGradient
        colors={["#dfdcc0", "#afd479"]}
        style={{
          position: "absolute",
          left: -80,
          right: 150,
          top: -120,
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
        <Text style={{ fontSize: 30, fontWeight: "bold", color:"white"}}>Bienvenido</Text>
        <Text style={{ fontSize: 20, color:"white" }}>Inicia Sesion</Text>
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
          secureTextEntry
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
    </ScrollView>
  );
};
export default Login;
