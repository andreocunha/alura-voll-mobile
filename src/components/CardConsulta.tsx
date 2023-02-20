import { Avatar, Text, VStack, HStack } from 'native-base';
import { Button } from './Button';

interface Props {
  nome?: string;
  foto?: string;
  data?: string;
  especialidade?: string;
  avaliacao?: number;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
}

export function CardConsulta ({ nome, foto, data, especialidade, avaliacao, foiAtendido, foiAgendado }: Props) {
  return (
    <VStack w="100%" bgColor={foiAtendido ? 'blue.100' : 'white'} p={5} shadow="2" borderRadius="lg">
        <VStack flexDir="row" flex={1} alignItems="flex-start" justifyContent="flex-start">
        <Avatar
          size="lg"
          source={{
            uri: foto,
          }}
        />
        <VStack space="1" alignItems="flex-start" ml="4">
          <Text bold>{nome}</Text>
          <Text fontSize="sm" color="muted.400">{especialidade}</Text>
          
          <HStack space={1} alignItems="center">
            <Text fontSize="sm">⭐⭐⭐⭐⭐</Text>
            <Text fontSize="sm" color="muted.400">({avaliacao})</Text>
          </HStack>

          { data && <Text fontSize="sm" color="muted.400">{data}</Text>}
        </VStack>
      </VStack>
      <Button mt="4">
        {foiAgendado ? 'Cancelar consulta' : 'Agendar consulta'}
      </Button>
    </VStack>
    );
};