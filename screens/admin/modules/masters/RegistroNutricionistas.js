import { View, Text, StyleSheet, ScrollView } from "react-native";
import _ from "lodash";
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  TextField,
  MaskedInput,
  DateTimePicker,
} from "react-native-ui-lib";
import React, { useEffect, useState } from "react";
// import DateTimePicker from "@react-native-community/datetimepicker";

const RegistroNutricionistas = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState(null);

  const renderPINCode = (value = "") => {
    return (
      <View row centerH>
        {_.times(4, (i) => {
          return (
            <View key={i} marginR-s3 center style={styles.pinCodeSquare}>
              <Text h1>{value[i]}</Text>
            </View>
          );
        })}
      </View>
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
        <View style ={{marginTop:20}}>
        <TextField placeholder="No. Colegiacion" style={styles.input} />
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

export default RegistroNutricionistas;
