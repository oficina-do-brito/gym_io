import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Manager } from "../pages";

const AuthStack = createNativeStackNavigator();
export const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName="Manager" screenOptions={{headerShown:false}}>
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="Manager" component={Manager} />
    </AuthStack.Navigator>
  );
};
