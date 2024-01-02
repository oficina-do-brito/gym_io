import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

// import { AuthRoutes } from "./auth.routes";
import React from "react";
import { Home, Logout, Manager } from "../pages";
import { Text } from "react-native";

const Drawer = createDrawerNavigator();
export const DrawerRoutes: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} options={{ drawerIcon: ({ color, size }) => (<Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen name="manager" component={Manager} options={{ drawerIcon: ({ color, size }) => (<Feather name="home" color={color} size={size} />),
          drawerLabel: "Manager",
        }}
      />
      <Drawer.Screen name="sair" component={Logout} options={{ drawerIcon: ({ color, size }) => (<Feather name="home" color={color} size={size} />),
          drawerLabel: "Logout",
        }}
      />
      
    </Drawer.Navigator>
  );
};
