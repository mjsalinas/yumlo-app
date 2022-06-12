import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, TextField } from "react-native-ui-lib";
import React, { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const RegistroPacientes = ({ navigation }) => {
  const [date, setDate] = useState(new Date());

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
          <TextField placeholder="Usuario" style={styles.input} />
          <TextField placeholder="Contraseña" style={styles.input} />
          <TextField placeholder="Nombre" style={styles.input} />
          <TextField placeholder="Apellido" style={styles.input} />
          <View
            style={{
              flexDirection: "column",
              padding: 5,
              textAlign: "center",
            }}
          >
            <Text style={{ color: "gray", fontSize: 16 }}>
              {" "}
              Fecha de Nacimiento{" "}
            </Text>
            {/* <DatePicker
            defaultDate={new Date()}
            value={date}
            onChange={(value) => {
              console.log(value);
              setDate(value);
            }}
          /> */}

            <DateTimePicker
              value={date}
              onChange={(event, date) => {
                setDate(date);
              }}
            ></DateTimePicker>
          </View>

          <TextField placeholder="Telefono" style={styles.input} />
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
