import { View, Text } from "react-native";
import React, { useState } from "react";
import { TabController, TabControllerItemProps } from "react-native-ui-lib";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import RegistroPacientes from "./user/masters/RegistroPacientes";
import RegistroNutricionistas from "./admin/modules/masters/RegistroNutricionistas";

const Tab = createMaterialTopTabNavigator();
const tabs = ["Paciente", "Nutricionista"];
// const [selectedTab, setSelectedTan] = useState({});
// const [initialIndex, setInitialIndex] = useState(0);

const Registro = () => {
  return(
          <Tab.Navigator 
          style={{backgroundColor:'red'}}
          >
              <Tab.Screen name = "Paciente" component={RegistroPacientes} />
              <Tab.Screen name = "Nutricionista" component={RegistroNutricionistas} />

          </Tab.Navigator>
  );
};

export default Registro;
