import { VStack, ScrollView, Divider, Text, Avatar } from "native-base";
import { Title } from "../../components/Title";

export default function Perfil() {
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="center" justifyContent="flex-start" p={5}>
        <Title color="blue.500">Meu Perfil</Title>

        <Avatar size="xl" source={{ uri: "https://github.com/andreocunha.png" }} mt="5" />
        <Title fontSize="lg" color="blue.500" mb="1">Informações Pessoais</Title>
        <Title fontSize="lg" mb="1">André Oliveira</Title>
        <Text>28/05/1990</Text>
        <Text>São Paulo - SP</Text>

        <Divider mt="5" />

        <Title fontSize="lg" color="blue.500" mb="1">Histórico Médico</Title>
        <Text>- Bronquite</Text>
        <Text>- Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}