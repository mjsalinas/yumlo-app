import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { Card, Image } from "react-native-ui-lib";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./Settings";
import { selectUser, selectAsesorias } from "../../../../src/Reducer";
import Axios from "axios";
import { API } from "../../../../api";

const Dashboard = ({ route, navigation }) => {
  const { user, asesorias } = useSelector(selectUser, selectAsesorias);
  const [asesoriasPendientes, setAsesoriasPendientes] = useState([]);

  useEffect(() => {
    Axios.get(API + `/asesoriasPendientes/${user.id_usuario}`).then((res) => {
      setAsesoriasPendientes(res.data);
    });
  }, [user]);

  useEffect(() => {
    console.log(asesoriasPendientes);
  }, [asesoriasPendientes]);

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
          <Text style={styles.mainTitle}>Hola Dr. {user.nombre + " "+ user.apellido}</Text>
          <Text>{asesoriasPendientes.length} asesorias pendientes</Text>
        </View>

        <Card
          height={60}
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
      </View>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.titleText}>
            <Icon name="bars" size={20}>
              Resumen de Actividad
            </Icon>
          </Text>
        </View>
        <View style={styles.cardsHolder}>
          <View style={styles.cardColumn}>
            <Card
              onPress={() => console.log("pressed")}
              center
              flex
              width="100%"
              height="65%"
              style={styles.card}
            >
              <Card.Section
                content={[
                  { text: "Asesorias Completas", white: true, text70: true },
                ]}
                style={styles.cardSectionContent}
              />
            </Card>
            <Card
              onPress={() => console.log("pressed")}
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
                height: "35%",
                marginTop: "10%",
              }}
            >
              <Card.Section
                content={[
                  {
                    text: "Total de Asesorias",
                    text70: true,
                    white: true,
                  },
                ]}
                style={styles.cardSectionContent}
              />
            </Card>
          </View>
          <View style={styles.cardColumn}>
            <Card
              onPress={() => console.log("pressed")}
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
              <Card.Section
                center
                flex
                content={[
                  {
                    text: "Total de Asesorias",
                    white: true,
                  },
                ]}
                style={styles.cardSectionContent}
              ></Card.Section>
            </Card>
            <Card
              onPress={() => console.log("pressed")}
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
              <Card.Section
                content={[{ text: "Pendientes", text70: true, white: true }]}
                style={styles.cardSectionContent}
              />
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
