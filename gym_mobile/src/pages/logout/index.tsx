import { SafeAreaView } from "react-native";
import styles from "../../components/global/styles.globals";
import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import { ContextAuth } from "../../shared/contexts/authContext";

export const Logout = () => {
  const auth = useContext(ContextAuth);
  useEffect(() => {
    setTimeout(() => {
      auth.setUsuarioAutenticado(null);
    }, 2500);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Isso é tudo pessoal até mais...</Text>
    </SafeAreaView>
  );
};
