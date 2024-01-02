import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, InputNormals } from "../../components";
import styles from "../../components/global/styles.globals";
import { RequestPostWithoutCredential } from "../../shared/axios/requests";
import { useState } from "react";

interface ScreenNavigationProps {
  goBack: () => void;
}
export const Registrar: React.FC = () => {
  const { goBack } = useNavigation<ScreenNavigationProps>();

  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [tipoUsuario, setTipoUsuario] = useState<string>("");

  //format data "2023-12-04 21:00:00.000",
  const handleColectData = async () => {
    const data = {
      nome: nome,
      email: email,
      password: password,
      status: status,
      dataNascimento: dataNascimento,
      tipoUsuario: tipoUsuario,
    };
    const response = await RequestPostWithoutCredential("/usuarios", data);
    if (response) {
      goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>registrar</Text>
      <InputNormals
        header={"nome"}
        nome={"nome"}
        type={""}
        placeholder={"Digite seu nome"}
        funcao={setNome}
      />
      <InputNormals
        header={"email"}
        nome={"email"}
        type={""}
        placeholder={"email valido example@gmail.com"}
        funcao={setEmail}
      />
      <InputNormals
        header={"password"}
        nome={"password"}
        type={""}
        placeholder={"Password L34e simbolos#"}
        funcao={setPassword}
      />
      <InputNormals
        header={"status"}
        nome={"status"}
        type={""}
        placeholder={"Status"}
        funcao={setStatus}
      />
      <InputNormals
        header={"data de nascimento"}
        nome={"dataNascimento"}
        type={""}
        placeholder={"Data de nascimento no formato YYYY-mm-dd"}
        funcao={setDataNascimento}
      />
      <InputNormals
        header={"tipo de usuario"}
        nome={"tipoUsuario"}
        type={""}
        placeholder={"normal ou admin"}
        funcao={setTipoUsuario}
      />

      <Button actionReally={handleColectData}>
        <Text>Cadastrar</Text>
      </Button>
    </SafeAreaView>
  );
};
