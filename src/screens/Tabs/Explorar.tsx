import { VStack, Image, Box, ScrollView } from "native-base";
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { CardConsulta } from "../../components/CardConsulta";

export default function Explorar() {
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <Input
            placeholder="Digite a especialidade"
          />
          <Input
            placeholder="Digite sua localização"
          />
          <Button mt={3} mb={3}>
            Buscar
          </Button>
        </Box>

        <Title>Resultado da Busca</Title>
        {[1, 2, 3].map((_, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index} mt="5">
            <CardConsulta 
              avaliacao={5}
              data="10/03/2023"
              especialidade="Cardiologia"
              foto="https://github.com/andreocunha.png"
              nome="Dr. Cunha"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}