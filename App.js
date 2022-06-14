import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import Login from "./screens/Login";
import Registro from "./screens/Registro";
import Dashboard from "./screens/admin/modules/dashboard/Dashboard";
import Configuraciones from "./screens/admin/modules/Configuraciones";
import UserDashboard from "./screens/user/UserDashboard";
import Asesoria from "./screens/user/Asesoria";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        {/* anadir boton para home  */}
        <Stack.Screen name="User Dashboard" component={UserDashboard} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Configuraciones" component={Configuraciones} />
        <Stack.Screen name="Asesoria" component={Asesoria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
