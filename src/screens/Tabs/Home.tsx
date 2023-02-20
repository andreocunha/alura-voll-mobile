import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import { Title } from "../../components/Title";
import Logo from '../../assets/logo.png';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Home({ navigation } : any) {

  const depoimentos = [
    {
      id: 1,
      title: 'Júlio, 40 anos, São Paulo/SP.',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
    },
    {
      id: 2,
      title: 'Júlio, 40 anos, São Paulo/SP.',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
    },
    {
      id: 3,
      title: 'Júlio, 40 anos, São Paulo/SP.',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
    }
  ]

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" mt={10} />
        <Title color="blue.500">Boas-vindas!</Title>

        <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
          <Input
            placeholder="Digite a especialidade"
          />
          <Input
            placeholder="Digite sua localização"
          />
          <Button mt={3} mb={3} onPress={() => navigation.navigate('Explorar')}>
            Buscar
          </Button>
        </Box>

        <Title color="blue.800" alignSelf="center">Depoimentos</Title>
        <VStack space={3} divider={<Divider />} w="100%">
          {
            depoimentos.map(depoimento => (
              <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                <Text color="gray.300" fontSize="md" textAlign="justify">
                  {depoimento.text}
                </Text>
                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{depoimento.title}</Text>
              </Box>
            ))
          }
        </VStack>
      </VStack>
    </ScrollView>
  );
}