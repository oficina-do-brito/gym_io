import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../../components";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ContextAuth } from "../../shared/contexts/authContext";
import { Image } from "react-native";
import loginIconImage from "../../../assets/icons_login.png";

interface ScreenNavigationProps {
  navigate: (screen: string) => void;
}
export const Login: React.FC = () => {
  const navigate = useNavigation<ScreenNavigationProps>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(ContextAuth);

  const handleSumbitButton = async () => {
    const data = {
      email: email,
      password: password,
    };
    const request = await auth.singIn(data.email, data.password);
    if (request) {
      console.log("sucess! rotas privadas liberadas!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ marginVertical: 30, marginHorizontal: 30 }}>
        Entre com suas credenciais e tenha acesso ao cadastro de informações{" "}
      </Text>
      <Image source={loginIconImage} width={200} height={200}/>
      <View style={styles.containerForm}>
        <Text>Login:</Text>
        <TextInput
          style={styles.inputs}
          placeholderTextColor={"#939393"}
          placeholder="email seguindo example@gmail.com..."
          onChangeText={setEmail}
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          placeholderTextColor={"#939393"}
          placeholder="senha no padrão caracteres Aa*_3"
          onChangeText={setPassword}
        />
      </View>
      <Button actionReally={handleSumbitButton}>
        <Text>Entrar</Text>
      </Button>
      <View style={styles.containerRow}>
        <TouchableOpacity activeOpacity={0.2}>
          <Text>esqueci</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => {
            navigate.navigate("Registrar");
          }}
        >
          <Text>cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
