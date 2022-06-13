import _ from "lodash";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-ui-lib";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./Settings";
import { ScrollView } from "react-native-gesture-handler";

const UserDashboard = ({navigation}) => {
  const [asesorias, setAsesorias] = useState([
    {key:"asesoria1", value:"test"},
    {key:"asesoria2",value:"test"},
   { key:"asesoria3",value:"test"},
  ]);

  const onRenderAsesorias = () => {
    return (
      <Card
        flex
        center
        style={styles.card}
        onPress={() => console.log("pressed")}
      >
        <Card.Section
          content={[
            {
              text: "Retroalimentaciones Recientes",

              $textDefault: true,
              white: true,
            },
            {
              text: "Miguel añadió un comentario...",
              white: true,
            },
          ]}
          style={styles.cardSectionContent}
        />
      </Card>
    );
  };

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        padding: 15,
      }}
    >
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
      <View name="header" style={styles.header}>
        <View>
          <Text style={styles.mainTitle}>Mis Asesorias</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={true}
          style={{ height: 200 }}
        >
          <View>
            {_.map(asesorias, (option) => (
              <Card
                flex
                center
                style={styles.card}
                onPress={() => navigation.navigate("Asesoria", {option})}
              >
                <Card.Section
                  content={[
                    {
                      text: option.value,
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
