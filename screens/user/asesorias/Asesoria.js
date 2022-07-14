import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../settings/AsesoriaSettings";
import PlanAlimenticio from "./PlanAlimenticio";
import Retroalimentacion from "../Retroalimentacion";
import DatosSeguimiento from "../DatosSeguimiento";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
const Asesoria = ({route}) => {
  const { asesoriaSeleccionada } = route.params;

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
        Dr{" "}
        {asesoriaSeleccionada.nutricionista_asignado.nombre +
          " " +
          asesoriaSeleccionada.nutricionista_asignado.apellido}{" "}
        - 21/05/2022
      </Text>

      <ScrollView>
        <View>
          <DatosSeguimiento asesoriaSeleccionada ={asesoriaSeleccionada}
          datos = {asesoriaSeleccionada.datos_seguimiento}></DatosSeguimiento>
        </View>
        <View >
          <Retroalimentacion asesoriaSeleccionada ={asesoriaSeleccionada}></Retroalimentacion>
        </View>
        <View>
          <PlanAlimenticio style={{ marginTop: 15 }}></PlanAlimenticio>
        </View>
      </ScrollView>
    </View>
  );
};

export default Asesoria;
