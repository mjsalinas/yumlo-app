import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  MaskedInput,
  TextField,
  DateTimePicker,
} from "react-native-ui-lib";
import React, { useEffect, useState } from "react";

const RegistroPacientes = ({ navigation }) => {
  const [date, setDate] = useState(new Date());

  const [phoneNumber, setPhoneNumber] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
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
          <TextField migrate placeholder="Usuario" style={styles.input} />
          <TextField migrate placeholder="Contraseña" style={styles.input} />
          <TextField migrate placeholder="Nombre" style={styles.input} />
          <TextField migrate placeholder="Apellido" style={styles.input} />
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
              value={date}
              onChange={(event, date) => {
                setDate(date);
              }}
            ></DateTimePicker>
            <View>
              <Text style={{ color: "gray", fontSize: 17 }}>
                Numero de Telefono
              </Text>
              <MaskedInput
                maxLength={8}
                style={{ fontSize: 15 }}
                ref={phoneNumber}
                placeholder={"XXXX-XXXX"}
                keyboardType={"numeric"}
                onBlur={(ev, val) => {
                  setPhoneNumber(val);
                }}
              />
            </View>
          </View>
        </View>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Registrarme
          </Text>
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Cancelar</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default RegistroPacientes;
