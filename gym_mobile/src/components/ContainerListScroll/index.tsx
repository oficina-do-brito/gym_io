import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { stComponents } from "./styles";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const Item = ({ i, active, setActive, name }: any) => {
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    setActive(i == active ? null : i);
  };
  const open = active == i;
  return (
    <TouchableOpacity
      style={stComponents.item}
      onPress={onPress}
      activeOpacity={1}
    >
      <ScrollView horizontal={false}>
        <View style={stComponents.row}>
          <Text>Horario - {name}</Text>
          <Text>{open ? "Fechar" : "Ver"}</Text>
        </View>
        {open &&
          [1, 2, 3, 4, 5, 6, 7].map((x) => (
            <Text key={x} style={stComponents.subItem}>
              -Re:- Neto~seu_gostoso
            </Text>
          ))}
      </ScrollView>
    </TouchableOpacity>
  );
};

export function ContainerListScroll() {
  const [active, setActive] = useState(null);
  const handleDaysMap = (index: number) => {
    switch (index) {
      case 1:
        return "Seg";
        break;
      case 2:
        return "Ter";
        break;
      case 3:
        return "Qua";
        break;
      case 4:
        return "Qui";
        break;
      case 5:
        return "Sex";
        break;
      case 6:
        return "Sab";
        break;
      case 7:
        return "Dom";
        break;
    }
  };
  return (
    <ScrollView horizontal={true} style={stComponents.container}>
      {[1, 2, 3, 4, 5, 6, 7].map((x, i) => (
        <Item
          key={x}
          active={active}
          i={i}
          setActive={setActive}
          name={handleDaysMap(++i)}
        />
      ))}
    </ScrollView>
  );
}
