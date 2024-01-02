import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "../../components/global/styles.globals";
import { Platform, UIManager } from "react-native";
import { ContainerListScroll, Item } from "../../components";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export interface ItemList {name:string;id:number;activated:boolean;}

export const Home: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ContainerListScroll />
    </SafeAreaView>
  );
};
