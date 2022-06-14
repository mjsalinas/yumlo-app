import { View, Text, StyleSheet, ScrollView } from "react-native";
import _ from "lodash";
import React, { useState } from "react";
import {
  Picker,
  ExpandableSection,
  TextField,
} from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Entypo";

const Configuraciones = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [configuracionesIsExpanded, setConfiguracionesIsExpanded] =
    useState(true);
  const [
    configuracionesDetallesIsExpanded,
    setConfiguracionesDetallesIsExpanded,
  ] = useState(true);
  const [configuracionesChevron, setConfiguracionesChevron] =
    useState("chevron-up");
  const [configuracionesDetalleChevron, setConfiguracionesDetalleChevron] =
    useState("chevron-up");
  const [categoryOptions, setCategoryOptions] = useState([]);

  const styles = StyleSheet.create({
    expandableHeader: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 5,
    },
    expandableSection: {
      flexDirection: "row",
      flex: 1,
      padding: 5,
    },
    expandableSectionInsertFields: {
      flexDirection: "row",
      alignContent: "space-between",
      paddingLeft: 5,
      paddingTop: 10,
    },
    expandableSectionEditFields: {
      flexDirection: "row",
      alignContent: "space-between",
      paddingLeft: 15,
      paddingTop: 10,
      height: 200,
      backgroundColor: "#b6d885",
      shadowColor: "black",
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowRadius: "15",
      shadowOpacity: "0.2",
      elevation: 15,
      borderRadius: 25,
    },
    expandableLayout: {
      padding: 15,
    },
    editButtons: {
      flexDirection: "row",
      alignContent: "space-between",
      paddingLeft: 5,
      paddingTop: 10,
    },
  });

  const handleOnExpandConfiguraciones = () => {
    setConfiguracionesIsExpanded(!configuracionesIsExpanded);
    if (!configuracionesIsExpanded == false) {
      setConfiguracionesChevron("chevron-down");
    } else {
      setConfiguracionesChevron("chevron-up");
    }
  };

  const handleOnExpandConfiguracionesDetalle = () => {
    setConfiguracionesDetallesIsExpanded(!configuracionesDetallesIsExpanded);
    if (!configuracionesDetallesIsExpanded == false) {
      setConfiguracionesDetalleChevron("chevron-down");
    } else {
      setConfiguracionesDetalleChevron("chevron-up");
    }
  };

  const getHeaderElement = (title) => {
    return (
      <View style={styles.expandableSection}>
        <Icon
          name={
            title == "Configuraciones"
              ? configuracionesChevron
              : configuracionesDetalleChevron
          }
          size={30}
        />
        <Text style={styles.expandableHeader}>{title}</Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.expandableLayout}>
        <ExpandableSection
          expanded={configuracionesIsExpanded}
          sectionHeader={getHeaderElement("Configuraciones")}
          onPress={handleOnExpandConfiguraciones}
        >
          <View style={styles.expandableSectionInsertFields}>
            <View
              style={{
                flexDirection: "column",
                flex: 0.45,
                alignContent: "space-between",
                paddingTop: 5,
              }}
            >
              <TextField migrate placeholder="Titulo" />
            </View>

            <View
              style={{
                flexDirection: "column",
                flex: 0.45,
                alignContent: "space-between",
                marginLeft: 10,
                paddingTop: 5,
              }}
            >
              <TextField migrate placeholder="Valor" />
            </View>
            <View
              style={{
                flexDirection: "column",
                flex: 0.2,
                marginLeft: 10,
              }}
            >
              <Icon
                name={"add-to-list"}
                size={30}
                onPress={() => {
                  console.log("presssseddd");
                }}
              />
            </View>
          </View>

          <View>
            <View>
              <ScrollView
                vertical
                showsVerticalScrollIndicator={true}
                style={{ height: 200 }}
              >
                <View style={styles.expandableSectionEditFields}>
                  <View
                    style={{
                      flexDirection: "column",
                      flex: 0.45,
                      alignContent: "space-between",
                      paddingTop: 5,
                    }}
                  >
                    <TextField migrate placeholder="Titulo" />
                  </View>

                  <View
                    style={{
                      flexDirection: "column",
                      flex: 0.45,
                      alignContent: "space-between",
                      marginLeft: 10,
                      paddingTop: 5,
                    }}
                  >
                    <TextField migrate placeholder="Valor" />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 0.2,
                      marginLeft: 10,
                    }}
                  >
                    <View style={styles.editButtons}>
                      <View>
                        {isEditing ? (
                          <Icon
                            name={"save"}
                            size={20}
                            onPress={() => {
                              setIsEditing(!isEditing);
                            }}
                          />
                        ) : (
                          <Icon
                            name={"edit"}
                            size={20}
                            onPress={() => {
                              setIsEditing(!isEditing);
                            }}
                          />
                        )}
                      </View>
                      <View style={{ marginLeft: 5 }}>
                      {isEditing ? (
                          <Icon
                            name={"block"}
                            size={20}
                            onPress={() => {
                              setIsEditing(!isEditing);
                            }}
                          />
                        ) : (
                          <Icon
                            name={"trash"}
                            size={20}
                            onPress={() => {
                              setIsEditing(!isEditing);
                            }}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ExpandableSection>
      </View>
      <View style={styles.expandableLayout}>
        <ExpandableSection
          expanded={configuracionesDetallesIsExpanded}
          sectionHeader={getHeaderElement("Configuraciones Detalle")}
          onPress={handleOnExpandConfiguracionesDetalle}
        >
          <View style={styles.expandableSectionInsertFields}>
            <View
              style={{
                flexDirection: "column",
                flex: 0.45,
                alignContent: "space-between",
                paddingTop: 5,
              }}
            >
              <TextField migrate placeholder="Titulo" />
            </View>

            <View
              style={{
                flexDirection: "column",
                flex: 0.45,
                alignContent: "space-between",
                marginLeft: 10,
                paddingTop: 5,
              }}
            >
              <TextField migrate placeholder="Valor" />
            </View>
            <View
              style={{
                flexDirection: "column",
                flex: 0.2,
                marginLeft: 10,
              }}
            >
              <Icon
                name={"add-to-list"}
                size={30}
                onPress={() => {
                  console.log("presssseddd");
                }}
              />
            </View>
          </View>

          <View>
            <Picker
              placeholder="Seleccione categoria"
              floatingPlaceholder
              //   value={{}}
              enableModalBlur={false}
              onChange={() => {}}
              topBarProps={{
                title: "Configuraciones",
                containerStyle: { marginTop: 40 },
              }}
              showSearch
              searchPlaceholder={"Buscar categoria de configuracion"}
              searchStyle={{}}
              migrateTextField
            >
              {_.map(categoryOptions, (option) => (
                <Picker.Item
                  key={option.value}
                  value={option}
                  label={""}
                  disabled={option.disabled}
                />
              ))}
            </Picker>
          </View>

          <View>
            <View>
              <ScrollView
                vertical
                showsVerticalScrollIndicator={true}
                style={{ height: 200 }}
              >
                <View style={styles.expandableSectionEditFields}>
                  <View
                    style={{
                      flexDirection: "column",
                      flex: 0.45,
                      alignContent: "space-between",
                      paddingTop: 5,
                    }}
                  >
                    <TextField migrate placeholder="Titulo" />
                  </View>

                  <View
                    style={{
                      flexDirection: "column",
                      flex: 0.45,
                      alignContent: "space-between",
                      marginLeft: 10,
                      paddingTop: 5,
                    }}
                  >
                    <TextField migrate placeholder="Valor" />
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      flex: 0.2,
                      marginLeft: 10,
                    }}
                  >
                    <View style={styles.editButtons}>
                      <View>
                        {isEditing ? (
                          <Icon
                            name={"save"}
                            size={20}
                            onPress={() => {
                              setIsEditing(!isEditing);
                            }}
                          />
                        ) : (
                          <Icon
                            name={"edit"}
                            size={20}
                            onPress={() => {
                              setIsEditing(!isEditing);
                            }}
                          />
                        )}
                      </View>
                      <View style={{ marginLeft: 5 }}>
                      {isEditing ? (
                          <Icon
                            name={"block"}
                            size={20}
                            onPress={() => {
                              setIsEditing(!isEditing);
                            }}
                          />
                        ) : (
                          <Icon
                            name={"trash"}
                            size={20}
                            onPress={() => {
                              setIsEditing(!isEditing);
                            }}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ExpandableSection>
      </View>
    </ScrollView>
  );
};

export default Configuraciones;
