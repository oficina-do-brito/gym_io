import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

interface IpropsInputControl {
  name: string;
  controler: Control;
}
export const InputControl: React.FC<IpropsInputControl> = ({
  name,
  controler,
}: IpropsInputControl) => {
  return (
    <View style={{ width: "100%" }}>
      <Controller
        control={controler}
        rules={{ maxLength: 100 }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={"Digite o " + name}
            onChangeText={onChange}
            value={value}
            autoCapitalize={"none"}
            style={styles.inputs}
          />
        )}
        name={name}
      />
    </View>
  );
};
