import { View, Text, StyleSheet, ScrollView } from "react-native";
import _ from "lodash";
import React, { useState } from "react";
import { Picker, ExpandableSection, TextField } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Entypo";
import { useSelector } from "react-redux";
import { selectAsesoriaSeleccionada, selectUser } from "../../src/Reducer";

const DatosSeguimiento = () => {
  const { user, selectedAsesoria } = useSelector(
    selectUser,
    selectAsesoriaSeleccionada
  );
  const [datosSeguimiento, setDatosSeguimiento] = useState(selectedAsesoria[0].datos_seguimiento);
  const [isExpanded, setIsExpanded] = useState(true);
  const [chevron, setChevron] = useState("chevron-up");
  const [categoryOptions, setCategoryOptions] = useState([
    { label: "Desayuno", value: "Desayuno" },
    { label: "Almuerzo", value: "Almuerzo" },
    { label: "Cena", value: "Cena" },
  ]);

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
      //   padding: 15,
    },
    editButtons: {
      flexDirection: "row",
      alignContent: "space-between",
      paddingLeft: 5,
      paddingTop: 10,
    },
  });

  const getHeaderElement = () => {
    return (
      <View style={styles.expandableSection}>
        <Icon name={chevron} size={30} />
        <Text style={styles.expandableHeader}>Datos de Seguimiento</Text>
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
          <View>
            {/* aa */}
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
                <Icon
                  name={"add-to-list"}
                  size={30}
                  onPress={() => {
                    console.log("presssseddd");
                  }}
                />
              </View>
            </View>
            {/* aa */}
          </View>

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
                  <Icon
                    name={"trash"}
                    size={25}
                    onPress={() => {
                      console.log("presssseddd");
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </ExpandableSection>
      </View>
    </View>
  );
};

export default DatosSeguimiento;
