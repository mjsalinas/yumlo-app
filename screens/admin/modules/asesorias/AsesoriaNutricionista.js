import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import IngresarPlanAlimenticio from "../planes-alimenticios/IngresarPlanAlimenticio";
import Retroalimentacion from "../../../user/Retroalimentacion";
import DatosSeguimiento from "../../../user/DatosSeguimiento";
import { styles } from "./AsesoriaSettings";

const AsesoriaNutricionista = ({ route, navigation }) => {
  const { asesoriaSeleccionada } = route.params;

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };
  const formatDate = (d) => {
    const date = new Date(d)
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  };
  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        padding: 15,
        marginTop: 25,
      }}
    >
      <StatusBar translucent />
      <LinearGradient
        // Background Linear Gradient
        colors={["#afd479", "#799f0c"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "110%",
        }}
      />
      <Text style={styles.mainTitle}>
        Asesoria #{asesoriaSeleccionada.id_asesoria}
      </Text>
      <Text style={styles.titleText}>
        {asesoriaSeleccionada.paciente.nombre +
          " " +
          asesoriaSeleccionada.paciente.apellido}{" "}
        - {formatDate(asesoriaSeleccionada.fechaPago)}
      </Text>

      <ScrollView>
        <View>
          <DatosSeguimiento></DatosSeguimiento>
        </View>
        <View style={{ marginTop: 15 }}>
          <Retroalimentacion></Retroalimentacion>
        </View>
        <View>
          <IngresarPlanAlimenticio
            style={{ marginTop: 15 }}
          ></IngresarPlanAlimenticio>
        </View>
      </ScrollView>
    </View>
  );
};

export default AsesoriaNutricionista;
