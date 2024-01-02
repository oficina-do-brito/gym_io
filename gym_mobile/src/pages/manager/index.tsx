import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
// import { getAllKeys, removeValue } from "../../shared/storage";

export const Manager: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Bem vindo a Manage</Text>
    </SafeAreaView>
  );
};
