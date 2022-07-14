import _ from "lodash";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-ui-lib";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./settings/UserDashboardSettings";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "axios";
import {
  selectUser,
  selectAsesorias,
  setSelectedAsesoria,
} from "../../src/Reducer";
import { API } from "../../api";

const UserDashboard = ({ navigation }) => {
  const { user, asesorias } = useSelector(selectUser, selectAsesorias);
  const dispatch = useDispatch();

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
          height: "110%",
        }}
      />
      <View name="header" style={styles.header}>
        <View>
          <Text style={styles.mainTitle}>Mis Asesorias</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={true}
          style={{ height: 220 }}
        >
          <View>
            {_.map(asesorias, (option) => (
              <Card
                flex
                center
                style={styles.card}
                onPress={() => {
                  Axios.get(API + `/asesoria/${option.id_asesoria}`).then(
                    (res) => {
                      const asesoriaSeleccionada = res.data[0];
                      navigation.navigate("Asesoria", { asesoriaSeleccionada });
                    }
                  );
                }}
              >
                <Card.Section
                  content={[
                    {
                      text:
                        "Asesoria #" +
                        option.id_asesoria +
                        "\nDr." +
                        option.id_nutricionista,
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

export default UserDashboard;
