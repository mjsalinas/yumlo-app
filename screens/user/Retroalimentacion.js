import _ from "lodash";
import { View, Text } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Image, ExpandableSection, TextField } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Entypo";
import { styles } from "./settings/AsesoriaSettings";
import { useSelector } from "react-redux";
import { selectAsesoriaSeleccionada, selectUser } from "../../src/Reducer";
import  Axios  from "axios";
import { API } from "../../api";

const Retroalimentacion = () => {
  const { user, selectedAsesoria } = useSelector(
    selectUser,
    selectAsesoriaSeleccionada
  );

  const [isExpanded, setIsExpanded] = useState(true);
  const [retroalimentacion, setRetroalimentacion] = useState("");
  const [fecha, setFecha] = useState(
    new Date().toISOString().slice(0, 10).replace("T", " ")
  );

  const [retroalimentaciones, setRetroalimentaciones] = useState(
    selectedAsesoria[0].retroalimentaciones || []
  );
  const [chevron, setChevron] = useState("chevron-up");
  const getHeaderElement = () => {
    return (
      <View style={styles.expandableSection}>
        <Icon name={chevron} size={30} />
        <Text style={styles.expandableHeader}>Retroalimentacion</Text>
      </View>
    );
  };
  const handleOnExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded == false) {
      setChevron("chevron-down");
    } else {
      setChevron("chevron-up");
    }
  };
  return (
    <View>
      <View style={styles.expandableLayout}>
        <ExpandableSection
          expanded={isExpanded}
          sectionHeader={getHeaderElement()}
          onPress={handleOnExpand}
        >
          <View style={styles.cardContainer}>
            <View
              style={{
                flexDirection: "row",
                padding: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flex: 0.9,
                  alignContent: "space-between",
                  width: "80%",
                }}
              >
                <TextField
                  migrate
                  placeholder="Retroalimentacion"
                  onChangeText={(value) => setRetroalimentacion(value)}
                  value={retroalimentacion}
                ></TextField>
              </View>
              <View>
                <Icon
                  name={"add-to-list"}
                  size={30}
                  onPress={() => {
                    Axios.post(API + `/retroalimentaciones`, {
                      id_asesoria: selectedAsesoria[0].id_asesoria,
                      retroalimentacion: retroalimentacion,
                      fecha: fecha,
                      ingresado_por: user.usuario,
                    }).then((res) => {
                      console.log(res.data);
                      setRetroalimentaciones(res.data)
                      setRetroalimentacion("")
                      // dispatch(setSelectedAsesoria(res.data));
                    });
                  }}
                />
              </View>
            </View>
            <ScrollView
              vertical
              showsVerticalScrollIndicator={true}
              style={{
                height: 300,
              }}
            >
              <View>
                {_.map(retroalimentaciones, (option) => (
                  <Card flex center style={styles.card} onPress={() => {}}>
                    <View style={{ flex: 0.2 }}>
                      <Image
                        source={require("../../assets/user.png")}
                        style={{ width: 40, height: 40, borderRadius: 400 / 2 }}
                      />
                    </View>
                    <View style={{ flex: 0.8 }}>
                      <Card.Section
                        content={[
                          {
                            text: option.retroalimentacion,
                            // white: true,
                          },
                        ]}
                        style={styles.cardSectionContent}
                      />
                    </View>
                  </Card>
                ))}
              </View>
            </ScrollView>
          </View>
        </ExpandableSection>
      </View>
    </View>
  );
};

export default Retroalimentacion;
