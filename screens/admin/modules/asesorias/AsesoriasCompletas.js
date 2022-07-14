import _ from "lodash";
import { View, Text } from "react-native";
import Axios from "axios";
import React from "react";
import { API } from "../../../../api";
import { selectAsesoriasCompletas, selectUser } from "../../../../src/Reducer";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./AsesoriaSettings";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-ui-lib";
import { useSelector } from "react-redux";

const AsesoriasCompletas = ({ navigation }) => {
  const { user, asesoriasCompletas } = useSelector(
    selectUser,
    selectAsesoriasCompletas
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
          <Text style={styles.mainTitle}>Asesorias Completas</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={true}
          style={{ height: 200 }}
        >
          <View>
            {_.map(asesoriasCompletas, (option) => (
              <Card
                flex
                center
                style={styles.card}
                onPress={() => {
                  Axios.get(API + `/asesoria/${option.id_asesoria}`).then(
                    (res) => {
                      const asesoriaSeleccionada = res.data[0];
                      navigation.navigate("AsesoriaNutricionista", {
                        asesoriaSeleccionada,
                      });
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

export default AsesoriasCompletas;
