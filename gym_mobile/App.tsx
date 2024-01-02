import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { ControllerRoutes } from "./src/routes";
import AuthContext from "./src/shared/contexts/authContext";
import 'react-native-gesture-handler';

const App = () => {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <AuthContext>
      <NavigationContainer>
        <ControllerRoutes />
      </NavigationContainer>
    </AuthContext>
  );
};
export default App;
