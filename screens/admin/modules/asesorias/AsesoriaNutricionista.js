import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import IngresarPlanAlimenticio from '../planes-alimenticios/IngresarPlanAlimenticio';
import Retroalimentacion from '../../../user/Retroalimentacion';
import DatosSeguimiento from '../../../user/DatosSeguimiento';
import { styles } from "./AsesoriaSettings";
import { selectAsesoriaSeleccionada, selectUser } from "../../../../src/Reducer";

const AsesoriaNutricionista = () => {
    const { user, selectedAsesoria } = useSelector(
        selectUser,
        selectAsesoriaSeleccionada
      );
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
        <IngresarPlanAlimenticio style={{ marginTop: 15 }}></IngresarPlanAlimenticio>
      </View>
    </ScrollView>
  </View>
  )
}

export default AsesoriaNutricionista