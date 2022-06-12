import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Card, Image } from "react-native-ui-lib";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
const Dashboard = () => {
  const styles = StyleSheet.create({
    mainTitle: {
      fontSize: 30,
      fontWeight: "bold",
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      padding: 5,
    },
    cardContainer: {
      flexDirection: "column",
      flex: 0.5,
      flexWrap: "wrap",
      alignContent: "space-between",
    },
    cardsHolder: {
      flexDirection: "row",
      flex: 1,
      alignContent: "space-between",
    },
    cardColumn: {
      flexDirection: "column",
      flex: 0.5,
      flexWrap: "wrap",
      alignContent: "space-between",
      padding: 5,
    },
    cardSectionContent: {
      padding: 10,
      flex: 1,
      flexWrap: "wrap",
      fontSize: 35,
    },
    card: {
      backgroundColor: "#F6EBE4",
      shadowColor: "black",
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowRadius: "15",
      shadowOpacity: "0.2",
      elevation: 15,
    },
  });

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
        colors={["#dfdcc0", "#afd479"]}
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
          <Text style={styles.mainTitle}>Hola Maria</Text>
          <Text>6 asesorias pendientes</Text>
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
                text70: true,
                $textDefault: true,
              },
              {
                text: "Miguel añadió un comentario...",
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
              height="60%"
              style={styles.card}
            >
              <Card.Section
                content={[{ text: "Asesorias Completas" }]}
                style={styles.cardSectionContent}
              />
            </Card>
            <Card
              onPress={() => console.log("pressed")}
              style={{
                backgroundColor: "#F6EBE4",
                shadowColor: "black",
                shadowOffset: {
                  width: 10,
                  height: 10,
                },
                shadowRadius: "15",
                shadowOpacity: "0.2",
                elevation: 15,
                height: "30%",
                marginTop: "10%",
              }}
            >
              <Card.Section
                content={[
                  {
                    text: "Total de Asesorias",
                    text70: true,
                    $textDefault: true,
                  },
                ]}
                style={styles.cardSectionContent}
              />
            </Card>
          </View>
          <View style={styles.cardColumn}>
            <Card
              backgroundColor="#2ABB97"
              onPress={() => console.log("pressed")}
              style={{
                backgroundColor: "#F6EBE4",
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
                content={[
                  { text: "En Curso", text70: true, $textDefault: true },
                ]}
                style={styles.cardSectionContent}
              />
            </Card>
            <Card
              backgroundColor="#A9664C"
              onPress={() => console.log("pressed")}
              style={{
                backgroundColor: "#F6EBE4",
                shadowColor: "black",
                shadowOffset: {
                  width: 10,
                  height: 10,
                },
                shadowRadius: "15",
                shadowOpacity: "0.2",
                elevation: 15,
                height: "60%",
                marginTop: "10%",
              }}
            >
              <Card.Section
                content={[
                  { text: "Pendientes", text70: true, $textDefault: true },
                ]}
                style={styles.cardSectionContent}
              />
            </Card>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          flex: 0.2,
          padding: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Button
            style={{
              backgroundColor: "#F6EBE4",
              height: 60,
              borderRadius: 400 / 2,
            }}
          >
            <Icon name="search1" size={20} />
          </Button>
          <View
           style={{
            flexDirection: "row",
          }}>
            <Image
              source={require("../../../../assets/user.png")}
              style={{ width: 60, height: 60, borderRadius: 400 / 2 }}
            />
            <Image
              source={require("../../../../assets/user.png")}
              style={{ width: 60, height: 60, borderRadius: 400 / 2 }}
            />
            <Image
              source={require("../../../../assets/user.png")}
              style={{ width: 60, height: 60, borderRadius: 400 / 2 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
