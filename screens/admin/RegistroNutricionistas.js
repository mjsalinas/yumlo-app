import { View, Text, StyleSheet, ScrollView } from "react-native";
import Axios from "axios";
import _ from "lodash";
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  TextField,
  MaskedInput,
  DateTimePicker,
} from "react-native-ui-lib";
import React, { useEffect, useState } from "react";
import { API } from "../../api";
// import DateTimePicker from "@react-native-community/datetimepicker";

const RegistroNutricionistas = ({ navigation }) => {
  const [usuario, setUsuario] = useState(null);
  const [contrasena, setContrasena] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [apellido, setApellido] = useState(null);
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [fechaNacimientoFormato, setFechaNacimientoFormato] = useState(
    new Date()
  );
  const [numeroTelefono, setNumeroTelefono] = useState(null);
  const [colegiacion, setColegiacion] = useState(null);

  const clearFields = () => {
    setUsuario(null);
    setContrasena(null);
    setNombre(null);
    setApellido(null);
    setNumeroTelefono(null);
    setColegiacion(null);
  };
  const handleOnPressRegister = () => {
    Axios.post(API + "/usuarios", {
      rol: 1,
      usuario: usuario,
      contrasena: contrasena,
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimientoFormato,
      telefono: numeroTelefono,
      colegiacion: colegiacion,
    })
      .then((response) => {
        if (response.status == 200) {
          navigation.navigate("Login");
          clearFields();
        }
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.data);
        return;
      });
  };

  const onChangeDatePicker = (value) => {
    setFechaNacimientoFormato(
      value.toISOString().slice(0, 10).replace("T", " ")
    );
  };

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
  });
  return (
    <ScrollView style={styles.scrollView}>
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
            flex: 0.2,
            padding: 5,
            textAlign: "center",
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
            onChangeText={(value) => setContrasena(value)}
            secureTextEntry
          />
          <TextField
            migrate
            placeholder="Nombre"
            style={styles.input}
            onChangeText={(value) => setNombre(value)}
          />
          <TextField
            migrate
            placeholder="Apellido"
            style={styles.input}
            onChangeText={(value) => setApellido(value)}
          />
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              padding: 5,
            }}
          >
            <DateTimePicker
              title={"Fecha de Nacimiento"}
              placeholder={"Seleccione"}
              mode={"date"}
              value={fechaNacimiento}
              onChange={onChangeDatePicker}
            ></DateTimePicker>
            <View>
              <Text style={{ color: "gray", fontSize: 17 }}>
                Numero de Telefono
              </Text>
              <MaskedInput
                maxLength={8}
                style={{ fontSize: 18, marginTop: 10 }}
                placeholder={"XXXX-XXXX"}
                keyboardType={"numeric"}
                renderMaskedText={<Text>{numeroTelefono}</Text>}
                onChangeText={(value) => {
                  setNumeroTelefono(value);
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <TextField
              migrate
              placeholder="No. Colegiacion"
              style={styles.input}
              onChangeText={(value) => setColegiacion(value)}
            />
          </View>
        </View>
        <Button style={styles.button} onPress={handleOnPressRegister}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Registrarme
          </Text>
        </Button>
        <Button
          style={styles.button}
          onPress={() => {
            clearFields();
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Cancelar</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default RegistroNutricionistas;
