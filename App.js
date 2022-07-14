import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, useSelector, useDispatch } from "react-redux";

import Registro from "./screens/Registro";
import Dashboard from "./screens/admin/modules/dashboard/Dashboard";
import Configuraciones from "./screens/admin/modules/configuraciones/Configuraciones";
import UserDashboard from "./screens/user/UserDashboard";
import Asesoria from "./screens/user/asesorias/Asesoria";
import IngresarPlanAlimenticio from "./screens/admin/modules/planes-alimenticios/IngresarPlanAlimenticio";
import Perfil from "./screens/Perfil";
import PagoAsesoria from "./screens/user/pago-asesoria/PagoAsesoria";
import store from "./src/Store";
import { selectUser } from "./src/Reducer";
import AsesoriasPendientes from "./screens/admin/modules/asesorias/AsesoriasPendientes";
import AsesoriaNutricionista from "./screens/admin/modules/asesorias/AsesoriaNutricionista";
import Asesorias from "./screens/admin/modules/asesorias/Asesorias";
import AsesoriasCompletas from "./screens/admin/modules/asesorias/AsesoriasCompletas";
import Login from "./screens/login";
import Icon from "react-native-vector-icons/Entypo";
import Retroalimentaciones from "./screens/admin/modules/retroalimentaciones/Retroalimentaciones";

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
          name={"Asesorias Pendientes"}
          component={AsesoriasPendientes}
        />
        <NutricionistaStack.Screen
          name={"Asesorias Totales"}
          component={Asesorias}
        />
        <NutricionistaStack.Screen
          name={"Asesorias Completas"}
          component={AsesoriasCompletas}
        />
        <NutricionistaStack.Screen
          name={"AsesoriaNutricionista"}
          component={AsesoriaNutricionista}
          options={{ headerShown: false }}
        />
          <NutricionistaStack.Screen
          name={"Retroalimentaciones"}
          component={Retroalimentaciones}
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
        <PacienteStack.Screen
          name={"Asesoria"}
          component={Asesoria}
          options={{ headerShown: false }}
        />
      </PacienteStack.Navigator>
    );
  };

  const LoginStack = (nav) => {
    return nav.route.params.isNutricionista ? (
      <NutricionistaTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "green",
          tabBarActiveBackgroundColor: "lightgray",
        }}
      >
        <NutricionistaTab.Screen
          name={"Dashboard"}
          component={NutricionistaStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name={"newsletter"} size={30} color={"black"} />;
            },
          }}
        />
        {/* <NutricionistaTab.Screen name={"Perfil"} component={Perfil} /> */}
        <NutricionistaTab.Screen
          name={"Configuraciones"}
          component={Configuraciones}
          options={{
            tabBarIcon: () => {
              return <Icon name={"tools"} size={30} color={"black"} />;
            },
          }}
        />
      </NutricionistaTab.Navigator>
    ) : (
      <PacienteTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "green",
        tabBarActiveBackgroundColor: "lightgray",
      }}>
        <PacienteTab.Screen
          name={"UserDashboard"}
          component={PacienteStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name={"list"} size={30} color={"black"} />;
            },
          }}
        />
        {/* <PacienteTab.Screen name={"Perfil"} component={Perfil} /> */}
        <PacienteTab.Screen
          name={"Pago Asesoria"}
          component={PagoAsesoria}
          options={{
            tabBarIcon: () => {
              return <Icon name={"credit-card"} size={30} color={"black"} />;
            },
          }}
        />
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
