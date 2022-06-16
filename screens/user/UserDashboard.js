import _ from "lodash";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-ui-lib";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./settings/UserDashboardSettings";
import { ScrollView } from "react-native-gesture-handler";
import { selectUser, selectAsesorias } from "../../src/Reducer";

const UserDashboard = ({ navigation }) => {
  const user = useSelector(selectUser);
  const asesorias = useSelector(selectAsesorias);

useEffect(()=>{
  console.log(asesorias)
})

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
                onPress={() => navigation.navigate("Asesoria", { option })}
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
