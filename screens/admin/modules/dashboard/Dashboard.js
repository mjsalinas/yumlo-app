import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Card, Image } from "react-native-ui-lib";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./Settings";
import { selectUser, selectAsesorias, selectAsesoriasPendientes } from "../../../../src/Reducer";
import Axios from "axios";
import { API } from "../../../../api";

const Dashboard = ({ route, navigation }) => {
  const { user, asesoriasPendientes } = useSelector(selectUser, selectAsesoriasPendientes);
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
      <View
        name="header"
        style={{
          flexDirection: "column",
          flex: 0.3,
          padding: 5,
        }}
      >
        <View
          style={{
            padding: 5,
          }}
        >
          <Text style={styles.mainTitle}>
            Hola Dr. {user.nombre + " " + user.apellido}
          </Text>
          <Text>{asesoriasPendientes.length} asesorias pendientes</Text>
        </View>

        <Card
          height={60}
          flex
          center
          style={styles.card}
          onPress={() => console.log("pressed")}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
            }}
          >
             <Image
                source={require("../../../../assets/chat.png")}
                style={{ width: 60, height: 60, borderRadius: 400 / 2 }}
              />
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "white", marginLeft:10,
                paddingTop: 15, }}
              >
                Retroalimentaciones Recientes 
              </Text>
          </View>
        </Card>
      </View>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.titleText}>
            <Icon name="list" size={20}>
              Resumen de Actividad
            </Icon>
          </Text>
        </View>
        <View style={styles.cardsHolder}>
          <View style={styles.cardColumn}>
            <Card
              onPress={() => {
                navigation.navigate("Asesorias Completas");
              }}
              center
              flex
              width="100%"
              height="60%"
              style={styles.card}
            >
              <Image
                source={require("../../../../assets/completas.gif")}
                style={{ width: 60, height: 60, borderRadius: 400 / 2 }}
              />

              <Text style={styles.cardTexts}>Asesorias Completas</Text>
            </Card>
          </View>
          <View style={styles.cardColumn}>
            <Card
              onPress={() => {
                navigation.navigate("Asesorias Totales");
              }}
              style={{
                backgroundColor: "#b6d885",
                shadowColor: "black",
                shadowOffset: {
                  width: 10,
                  height: 10,
                },
                shadowRadius: "15",
                shadowOpacity: "0.2",
                elevation: 15,
                width: "100%",
                height: "30%",
              }}
            >
              <Image
                source={require("../../../../assets/totales.png")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 400 / 2,
                  marginLeft: 80,
                  marginTop: 8,
                }}
              />
              <Text style={styles.cardTexts}> Asesorias Totales</Text>
            </Card>
            <Card
              onPress={() => {
                navigation.navigate("Asesorias Pendientes");
              }}
              center
              flex
              width="100%"
              height="65%"
              style={{
                backgroundColor: "#b6d885",
                shadowColor: "black",
                shadowOffset: {
                  width: 10,
                  height: 10,
                },
                shadowRadius: "15",
                shadowOpacity: "0.2",
                elevation: 15,
                marginTop: "10%",
              }}
            >
              <Image
                source={require("../../../../assets/pendientes.png")}
                style={{ width: 60, height: 60, borderRadius: 400 / 2 }}
              />
              <Text style={styles.cardTexts}> Asesorias Pendientes</Text>
            </Card>
          </View>
        </View>
      </View>
      {/* <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 30 }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 66,
              width: 66,
              borderRadius: 50,
            }}
          >
            <Image
              source={require("../../../../assets/user.png")}
              style={{ width: 60, height: 60, borderRadius: 400 / 2 }}
            />
          </View>
        </ScrollView>
      </View> */}
    </View>
  );
};

export default Dashboard;
