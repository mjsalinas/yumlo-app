import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import _ from "lodash";
import Axios from "axios";
import {
  Picker,
  ExpandableSection,
  TextField,
  Button,
  Card,
} from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Entypo";
import { selectUser } from "../../src/Reducer";
import { API } from "../../api";
import { styles } from "./settings/DatosSeguimientoSettings";

const DatosSeguimiento = ({ asesoriaSeleccionada }) => {
  const { user } = useSelector(selectUser);

  const [isExpanded, setIsExpanded] = useState(true);
  const [chevron, setChevron] = useState("chevron-up");

  const [datosSeguimiento, setDatosSeguimiento] = useState(
    asesoriaSeleccionada.datos_seguimiento
  );
  const [configuracionesCategorias, setConfiguracionesCategorias] = useState(
    []
  );

  const [idCategoriaSeleccionada, setIdCategoriaSeleccionada] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({});
  const [descripcionDatoSeguimiento, setDescripcionDatoSeguimiento] =
    useState("");

  useEffect(() => {
    if (user.rol == "nutricionista") {
      Axios.get(API + `/configuraciones/${user.usuario}`).then((res) => {
        setConfiguracionesCategorias(res.data.configuraciones);
      });
    } else {
      Axios.get(
        API +
          `/configuracionesNutricionistaId/${asesoriaSeleccionada.id_nutricionista}`
      ).then((res) => {
        setConfiguracionesCategorias(res.data.configuraciones);
      });
    }
  }, []);

  useEffect(() => {
    insertarConfiguracionesEnDatosSeguimiento();
    setDatosSeguimiento(asesoriaSeleccionada.datos_seguimiento);
  }, [configuracionesCategorias]);

  const insertarConfiguracionesEnDatosSeguimiento = () => {
    const datosSeguimientoCopia = asesoriaSeleccionada.datos_seguimiento;
    _.map(
      datosSeguimientoCopia,
      (datoSeguimiento) =>
        (datoSeguimiento.configuracion = configuracionesCategorias.find(
          (configuracion) =>
            configuracion.id_configuracion ===
            datoSeguimiento.id_campo_seguimiento
        ))
    );
    setDatosSeguimiento(datosSeguimientoCopia);
  };

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

  const handleOnPressAddDato = () => {
    const request = {
      id_asesoria: asesoriaSeleccionada.id_asesoria,
      id_campo_seguimiento: idCategoriaSeleccionada,
      id_unidad_medida: null,
      dato: descripcionDatoSeguimiento,
      fecha: new Date().toISOString().slice(0, 10).replace("T", " "),
      ingresado_por: user.usuario,
    };
    Axios.post(API + `/datosSeguimiento`, request).then((res) => {
      setDatosSeguimiento(res.data);
      clearFields();
    });
    insertarConfiguracionesEnDatosSeguimiento();
  };
  const clearFields = () => {
    setCategoriaSeleccionada("");
    setDescripcionDatoSeguimiento("");
  };
  const renderTituloDato = (option) => {
    // return (
    //   option.configuracion.valor + " (" + option.configuracion.descripcion + ")"
    // );
  };
  return (
    <View>
      <View style={styles.expandableLayout}>
        <ExpandableSection
          expanded={isExpanded}
          sectionHeader={getHeaderElement()}
          onPress={handleOnExpand}
        >
          <View
            style={{
              paddingBottom: 15,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignContent: "space-between",
                width: "100%",
              }}
            >
              <View
                style={{
                  height: 60,
                  marginTop: 10,
                  borderRadius: 15,
                  paddingLeft: 30,
                  backgroundColor: "white",
                }}
              >
                <Picker
                  placeholder="Seleccione categoria"
                  floatingPlaceholder
                  value={categoriaSeleccionada}
                  enableModalBlur={false}
                  onChange={(item) => {
                    setCategoriaSeleccionada(item);
                    setIdCategoriaSeleccionada(item.value);
                  }}
                  topBarProps={{
                    title: "Configuraciones",
                    containerStyle: { marginTop: 40 },
                  }}
                  showSearch
                  searchPlaceholder={"Buscar categoria de configuracion"}
                  searchStyle={{}}
                  migrateTextField
                >
                  {_.map(configuracionesCategorias, (option) => (
                    <Picker.Item
                      key={option.id_configuracion}
                      value={option.id_configuracion}
                      label={option.valor + " (" + option.descripcion + ")"}
                      disabled={option.disabled}
                    />
                  ))}
                </Picker>
              </View>
              <View>
                <TextField
                  migrate
                  placeholder="Descripcion"
                  value={descripcionDatoSeguimiento}
                  onChangeText={(value) => setDescripcionDatoSeguimiento(value)}
                  style={{
                    backgroundColor: "white",
                    height: 60,
                    borderRadius: 15,
                    borderColor: "#afd479",
                    borderWidth: 1,
                    paddingLeft: 30,
                    marginTop: 10,
                  }}
                />
                <Button
                  onPress={handleOnPressAddDato}
                  style={{
                    flexDirection: "row",
                    paddingLeft: 20,
                    height: 60,
                    marginTop: 10,
                    borderRadius: 20,
                    alignItems: "center",
                    backgroundColor: "#4D6924",
                  }}
                >
                  <View
                    style={{
                      flex: 0.4,
                      marginLeft: 10,
                    }}
                  >
                    <Icon name={"add-to-list"} size={30} color={"white"} />
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    Agregar dato de seguimiento
                  </Text>
                </Button>
              </View>
            </View>
          </View>

          <ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            style={{
              height: 200,
            }}
          >
            <View>
              {_.map(datosSeguimiento, (option) => (
                <Card flex center style={styles.card}>
                  <View
                    style={{
                      flexDirection: "column",
                      flex: 0.45,
                      alignContent: "space-between",
                      paddingTop: 5,
                    }}
                  >
                    <TextField
                      migrate
                      placeholder="Titulo"
                      disabled={true}
                      value={renderTituloDato(option)}
                      style={{ color: "white" }}
                    />
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
                    <TextField
                      migrate
                      placeholder="Valor"
                      disabled={true}
                      value={option.dato}
                      style={{ color: "white" }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 0.2,
                      marginLeft: 10,
                    }}
                  ></View>
                </Card>
              ))}
            </View>
          </ScrollView>
        </ExpandableSection>
      </View>
    </View>
  );
};

export default DatosSeguimiento;
