import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./settings/AsesoriaSettings";
import PlanAlimenticio from "./PlanAlimenticio";
import Retroalimentacion from "./Retroalimentacion";
import DatosSeguimiento from "./DatosSeguimiento";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { selectAsesoriaSeleccionada, selectUser } from "../../src/Reducer";
const Asesoria = () => {
  const { user, selectedAsesoria } = useSelector(
    selectUser,
    selectAsesoriaSeleccionada
  );

  useEffect(() => {
    console.log("selected asesoria:");
    console.log(selectedAsesoria[0]);
  });

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        padding: 15,
        paddingTop: 0,
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
          height: "100%",
        }}
      />
      <Text style={styles.mainTitle}>
        Asesoria #{selectedAsesoria[0].id_asesoria}
      </Text>
      <Text style={styles.titleText}>
        Dr{" "}
        {selectedAsesoria[0].nutricionista_asignado.nombre +
          " " +
          selectedAsesoria[0].nutricionista_asignado.apellido}{" "}
        - 21/05/2022
      </Text>

      <ScrollView>
        <View>
          <DatosSeguimiento></DatosSeguimiento>
        </View>
        <View style={{ marginTop: 15 }}>
          <Retroalimentacion></Retroalimentacion>
        </View>
        <View>
          <PlanAlimenticio style={{ marginTop: 15 }}></PlanAlimenticio>
        </View>
      </ScrollView>
    </View>
  );
};

export default Asesoria;
