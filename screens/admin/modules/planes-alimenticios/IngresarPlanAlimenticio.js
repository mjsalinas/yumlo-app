import _ from "lodash";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Icon from "react-native-vector-icons/Entypo";
import {
  Picker,
  ExpandableSection,
  TextField,
  Card,
  Button,
  Image,
} from "react-native-ui-lib";
import { styles } from "./PlanAlimenticioSettings";
import { useSelector } from "react-redux";
import {
  selectAsesoriaSeleccionada,
  selectUser,
} from "../../../../src/Reducer";
import { API } from "../../../../api";

const IngresarPlanAlimenticio = ({ asesoriaSeleccionada }) => {
  const { user } = useSelector(selectUser);

  const [configuracionesDetalle, setConfiguracionesDetalle] = useState([]);
  const [planAlimenticio, setPlanAlimenticio] = useState(
    asesoriaSeleccionada.plan_alimenticio
  );
  const [selectedConfiguracionDetalle, setSelectedConfiguracionDetalle] =
    useState({});
  const [selectedConfiguracionDetalleId, setSelectedConfiguracionDetalleId] =
    useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const [chevron, setChevron] = useState("chevron-up");

  useEffect(() => {
    Axios.get(API + `/configuraciones/${user.usuario}`).then((res) => {
      let configuracionesDetalleCopia = res.data.configuracionesDetalle;
      _.map(
        configuracionesDetalleCopia,
        (configDetalle) =>
          (configDetalle.valorConfiguracion = res.data.configuraciones.find(
            (configuracion) =>
              configuracion.id_configuracion === configDetalle.id_configuracion
          ).valor)
      );
      setConfiguracionesDetalle(configuracionesDetalleCopia);
    });
  }, []);

  const handleOnPressAgregarElemento = () => {
    Axios.post(API + `/configuracionPlanAlimenticio`, {
      id_asesoria: asesoriaSeleccionada.id_asesoria,
      id_configuracion_detalle: selectedConfiguracionDetalleId,
    }).then((res) => {
      setPlanAlimenticio(res.data);
      clearFields();
    });
  };
  const getHeaderElement = () => {
    return (
      <View style={styles.expandableSection}>
        <Icon name={chevron} size={30} />
        <Text style={styles.expandableHeader}>Plan Alimenticio</Text>
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
  const clearFields = () => {};
  return (
    <View>
      <View style={styles.expandableLayout}>
        <ExpandableSection
          expanded={isExpanded}
          sectionHeader={getHeaderElement()}
          onPress={handleOnExpand}
        >
          <View style={styles.pickerElemento}>
            <Picker
              placeholder={"Seleccione elemento a añadir"}
              style={{ color: "black" }}
              value={selectedConfiguracionDetalle}
              floatingPlaceholder
              enableModalBlur={false}
              onChange={(item) => {
                setSelectedConfiguracionDetalle(item);
                setSelectedConfiguracionDetalleId(item.value);
              }}
              topBarProps={{
                title: "Elementos de Plan",
                containerStyle: { marginTop: 40 },
              }}
              showSearch
              searchPlaceholder={"Buscar elemento"}
              migrateTextField
            >
              {_.map(configuracionesDetalle, (option) => (
                <Picker.Item
                  value={option.id_configuracion_detalle}
                  label={option.valorConfiguracion + " - " + option.descripcion}
                />
              ))}
            </Picker>
          </View>

          <Button
            style={styles.botonElemento}
            onPress={handleOnPressAgregarElemento}
          >
            <View
              style={{
                flex: 0.3,
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
              Agregar elemento al plan
            </Text>
          </Button>
          <ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            style={{
              marginTop: 15,
              height: 200,
            }}
          >
            <View>
              {_.map(planAlimenticio, (option) => (
                <Card flex center style={styles.card}>
                  <Image
                    // source={option.valor}
                    // source={require("../../../../assets/food2.jpeg")}
                    style={styles.elementoPlan}
                  />
                  <View
                    style={{
                      flex: 0.9,
                      marginLeft: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>
                      {" "}
                      * option.valorConfiguracion
                    </Text>
                    <Text> * option.descripcion</Text>
                  </View>
                </Card>
              ))}
            </View>
          </ScrollView>
        </ExpandableSection>
      </View>
    </View>
  );
};

export default IngresarPlanAlimenticio;
