import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

interface IpropsINormals {
  header: string;
  nome: string;
  type: string;
  placeholder: string;
  funcao: (state: string) => void;
}
export const InputNormals: React.FC<IpropsINormals> = ({
  header,
  nome,
  type,
  placeholder,
  funcao,
}: IpropsINormals) => {
  return (
    <View style={styles.grup}>
      <Text>{header}</Text>
      <TextInput
        style={styles.inputs}
        placeholderTextColor={"#939393"}
        placeholder={placeholder}
        onChangeText={funcao}
        autoCapitalize="none"
      />
    </View>
  );
};
