import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, useSelector, useDispatch } from "react-redux";

import Login from "./screens/Login";
import Registro from "./screens/Registro";
import Dashboard from "./screens/admin/modules/dashboard/Dashboard";
import Configuraciones from "./screens/admin/modules/Configuraciones";
import UserDashboard from "./screens/user/UserDashboard";
import Asesoria from "./screens/user/Asesoria";
import IngresarPlanAlimenticio from "./screens/admin/IngresarPlanAlimenticio";
import Perfil from "./screens/Perfil";
import PagoAsesoria from "./screens/user/PagoAsesoria";
import store from "./src/Store";
import { selectUser } from "./src/Reducer";

const App = () => {
  let isNutricionista;
  const NutricionistaStack = createStackNavigator();
  const PacienteStack = createStackNavigator();
  const Stack = createStackNavigator();
  const NutricionistaTab = createBottomTabNavigator();
  const PacienteTab = createBottomTabNavigator();

  const NutricionistaStackScreen = () => {
    return (
      <NutricionistaStack.Navigator>
        <NutricionistaStack.Screen name={"Dashboard"} component={Dashboard} />
        <NutricionistaStack.Screen
          name={"IngresarPlanAlimenticio"}
          component={IngresarPlanAlimenticio}
        />
      </NutricionistaStack.Navigator>
    );
  };

  const PacienteStackScreen = () => {
    return (
      <PacienteStack.Navigator>
        <PacienteStack.Screen
          name={"UserDashboard"}
          component={UserDashboard}
        />
        <PacienteStack.Screen name={"Asesoria"} component={Asesoria} />
      </PacienteStack.Navigator>
    );
  };

  const LoginStack = (nav) => {
    return nav.route.params.isNutricionista ? (
      <NutricionistaTab.Navigator>
        <NutricionistaTab.Screen
          name={"Dashboard"}
          component={NutricionistaStackScreen}
          options={{ headerShown: false }}
        />
        <NutricionistaTab.Screen name={"Perfil"} component={Perfil} />
        <NutricionistaTab.Screen
          name={"Configuraciones"}
          component={Configuraciones}
        />
      </NutricionistaTab.Navigator>
    ) : (
      <PacienteTab.Navigator>
        <PacienteTab.Screen
          name={"UserDashboard"}
          component={PacienteStackScreen}
          options={{ headerShown: false }}
        />
        <PacienteTab.Screen name={"Perfil"} component={Perfil} />
        <PacienteTab.Screen name={"PagoAsesoria"} component={PagoAsesoria} />
      </PacienteTab.Navigator>
    );
  };
  return (
    <Provider store={store}>
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"Login"} component={Login} />
          <Stack.Screen name={"Registro"} component={Registro} />
          <Stack.Screen
            name={"Main"}
            component={LoginStack}
            options={{ headerShown: false }}
            params={{ isNutricionista }}
            useLegacyImplementation={false}
          />
        </Stack.Navigator>
      </NavigationContainer> 
    </Provider>
  );
};

export default App;
