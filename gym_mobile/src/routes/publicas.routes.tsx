import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Registrar } from "../pages";

const PublicStack = createNativeStackNavigator();
export const PublicRoutes: React.FC = () => {
  return (
    <PublicStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <PublicStack.Screen name="Login" component={Login} />
      <PublicStack.Screen name="Registrar" component={Registrar} />
    </PublicStack.Navigator>
  );
};
