import React, { useState } from "react";
import _ from "lodash";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Entypo";
import { Picker,
  ExpandableSection,
  TextField,
  Card,
  Button,
  Image,} from "react-native-ui-lib";
import { selectAsesoriaSeleccionada, selectUser } from "../../../src/Reducer";
import { styles } from "./PlanAlimenticioSettings";

const PlanAlimenticio = () => {
  const { user, selectedAsesoria } = useSelector(
    selectUser,
    selectAsesoriaSeleccionada
  );
  const [configuracionesDetalle, setConfiguracionesDetalle] = useState([]);
  const [selectedConfiguracionDetalle, setSelectedConfiguracionDetalle] =
    useState({});
  const [selectedConfiguracionDetalleId, setSelectedConfiguracionDetalleId] =
    useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const [chevron, setChevron] = useState("chevron-up");

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
  return (
    <View>
      <View style={styles.expandableLayout}>
        <ExpandableSection
          expanded={isExpanded}
          sectionHeader={getHeaderElement()}
          onPress={handleOnExpand}
        >
          <ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            style={{
              marginTop: 15,
              height: 200,
            }}
          >
            <Card flex center style={styles.card}>
              <Image
                source={require("../../../assets/food2.jpeg")}
                style={styles.elementoPlan}
              />
              <View
                style={{
                  flex: 0.9,
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontWeight: "bold" }}> Desayuno</Text>
                <Text> Bowl de Avena</Text>
              </View>
            </Card>
            <Card flex center style={styles.card}>
              <Image
                source={require("../../../assets/food1.jpg")}
                style={styles.elementoPlan}
              />
              <View
                style={{
                  flex: 0.9,
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontWeight: "bold" }}> Almuerzo</Text>
                <Text> 130 g de Pollo y ensalada verde</Text>
              </View>
            </Card>
            <Card flex center style={styles.card}>
              <Image
                source={require("../../../assets/food3.jpg")}
                style={styles.elementoPlan}
              />
              <View
                style={{
                  flex: 0.9,
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontWeight: "bold" }}> Cena</Text>
                <Text> 130 g de Pescado y 1/3 taza de Arroz  </Text>
              </View>
            </Card>
          </ScrollView>
        </ExpandableSection>
      </View>
    </View>
  );
};

export default PlanAlimenticio;
