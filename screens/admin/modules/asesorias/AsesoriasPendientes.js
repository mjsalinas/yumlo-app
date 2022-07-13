import _ from "lodash";
import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-ui-lib";
import { ScrollView } from "react-native-gesture-handler";
import {  useSelector } from "react-redux";
import {
  selectAsesoriasPendientes,
  selectUser,
} from "../../../../src/Reducer";
import { styles } from "./AsesoriaSettings";
import Axios from "axios";
import { API } from "../../../../api";

const AsesoriasPendientes = ({ navigation }) => {
  const { user,  asesoriasPendientes } = useSelector(
    selectUser,
    selectAsesoriasPendientes
  );

 
  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        padding: 15,
      }}
    >
      <LinearGradient
        colors={["#afd479", "#799f0c"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <View name="header" style={styles.header}>
        <View>
          <Text style={styles.mainTitle}>Asesorias Pendientes</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={true}
          style={{ height: 200 }}
        >
          <View>
            {_.map(asesoriasPendientes, (option) => (
              <Card
                flex
                center
                style={styles.card}
                onPress={() => {
                  Axios.get(API + `/asesoria/${option.id_asesoria}`).then((res) => {
                    const asesoriaSeleccionada = res.data[0];
                    navigation.navigate("AsesoriaNutricionista", {asesoriaSeleccionada});
                  });
                }}
              >
                <Card.Section
                  content={[
                    {
                      text:
                        "Asesoria #" +
                        option.id_asesoria +
                        "\n" +
                        option.paciente.nombre +
                        " " +
                        option.paciente.apellido,
                      white: true,
                    },
                  ]}
                  style={styles.cardSectionContent}
                />
              </Card>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AsesoriasPendientes;
