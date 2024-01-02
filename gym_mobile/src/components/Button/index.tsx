import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

interface IpropsButoon {
  color?: string;
  actionReally: () => void;
  children: ReactNode;
}
export const Button: React.FC<IpropsButoon> = ({
  color,
  children,
  actionReally,
}: IpropsButoon) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 20,
        backgroundColor: `${color ? color : "#21D192"}`,
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        width: 100,
        borderRadius: 7,
      }}
      activeOpacity={0.2}
      onPress={actionReally}
    >
      {children}
    </TouchableOpacity>
  );
};
