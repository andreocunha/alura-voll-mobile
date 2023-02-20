import { VStack, ScrollView, Divider } from "native-base";
import { Button } from "../../components/Button";
import { CardConsulta } from "../../components/CardConsulta";
import { Title } from "../../components/Title";

export default function Consultas() {
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Title color="blue.500" alignSelf="center">Minhas consultas</Title>
        <Button>
          Agendar nova consulta
        </Button>

        <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white">
          <Title color="blue.500" mb="5">Próximas consultas</Title>
          <CardConsulta 
            avaliacao={5}
            data="10/03/2023"
            especialidade="Cardiologia"
            foto="https://github.com/andreocunha.png"
            nome="Dr. Cunha"
            foiAgendado
          />
        </VStack>
        <Divider mt="5" />

        <Title color="blue.500" mb="5">Consultas passadas</Title>
        {[1, 2, 3].map((_, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index} mt="5">
            <CardConsulta 
              avaliacao={5}
              data="10/03/2023"
              especialidade="Cardiologia"
              foto="https://github.com/andreocunha.png"
              nome="Dr. Cunha"
              foiAtendido
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}