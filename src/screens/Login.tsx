import { VStack, Image, Text, Box, Link } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from '../assets/logo.png';
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Title } from "../components/Title";

export default function Login({ navigation }: any) {
  return (
    <VStack flex={1} bgColor="white" alignItems="center" p={5} >
      <Image source={Logo} alt="Logo" mt={10} />
      <Title>
        Faça login em sua conta
      </Title>
      <Box>
        <Input
          label="Email"
          placeholder="Insira seu endereço de e-mail"
          errorMessage="Email inválido"
        />
        <Input
          label="Senha"
          placeholder="Insira sua senha"
          errorMessage="Senha inválida"
          secureTextEntry
        />
      </Box>
      <Button onPress={() => navigation.navigate('Tabs')}>
        Entrar
      </Button>

      <Link href="https://www.alura.com.br/" mt={3}>
        Esqueceu sua senha?
      </Link>

      <Box mt={10} w="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500" fontWeight="bold">Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>

    </VStack>
  );
}