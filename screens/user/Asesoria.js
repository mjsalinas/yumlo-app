import _ from "lodash";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./settings/AsesoriaSettings";
import PlanAlimenticio from "./PlanAlimenticio";
import Retroalimentacion from "./Retroalimentacion";
import DatosSeguimiento from "./DatosSeguimiento";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const Asesoria = ({ route, navigation }) => {
  const { option } = route.params;

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        padding: 15,
        paddingTop: 0,
      }}
    >
        <StatusBar translucent/>
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
      <Text style={styles.mainTitle}>Asesoria #{option.key}</Text>
      <Text style={styles.titleText}>Dr {option.value} - 21/05/2022</Text>

      <ScrollView>
      <View>
          <DatosSeguimiento></DatosSeguimiento>
        </View>
        <View style={{ marginTop: 15 }}>
          <Retroalimentacion option></Retroalimentacion>
        </View>
        <View>
          <PlanAlimenticio style={{ marginTop: 15 }}></PlanAlimenticio>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Asesoria;
