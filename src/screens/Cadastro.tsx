import { VStack, Image, Box, ScrollView, Icon } from "native-base";
import { useState } from "react";
import Logo from '../assets/logo.png';
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Title } from "../components/Title";

export default function Cadastro({ navigation }: any) {
  const secoes = [
    {
      id: 1,
      title: 'Insira alguns dados básicos:',
      inputs: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo',
          errorMessage: 'Nome inválido',
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Insira seu endereço de e-mail',
          errorMessage: 'Email inválido',
        },
        {
          id: 3,
          label: 'Crie uma senha',
          placeholder: 'Insira sua senha',
          errorMessage: 'Senha inválida',
          secureTextEntry: true,
        },
        {
          id: 4,
          label: 'Confirme sua senha',
          placeholder: 'Insira sua senha',
          errorMessage: 'Senha inválida',
          secureTextEntry: true,
        }
      ]
    },
    {
      id: 2,
      title: 'Agora, mais alguns dados sobre você:',
      inputs: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Insira seu CEP',
          errorMessage: 'CEP inválido',
        },
        {
          id: 2,
          label: 'Endereço',
          placeholder: 'Insira seu endereço',
          errorMessage: 'Endereço inválido',
        },
        {
          id: 3,
          label: 'Número',
          placeholder: 'Insira seu número',
          errorMessage: 'Número inválido',
        },
        {
          id: 4,
          label: 'Complemento',
          placeholder: 'Insira seu complemento',
          errorMessage: 'Complemento inválido',
        },
        {
          id: 5,
          label: 'Telefone',
          placeholder: '(00) 00000-0000',
          errorMessage: 'Telefone inválido',
        },
      ]
    },
    {
      id: 3,
      title: 'Para finalizar, um detalhe importante:',
      inputs: []
    }
  ]

  const [secao, setSecao] = useState(1);

  const avancarSecao = () => {
    if (secao < secoes.length) {
      setSecao(secao + 1);
    } else {
      concluirCadastro();
    }
  };

  const concluirCadastro = () => {
    console.log('concluir cadastro');
    navigation.navigate('Tabs');
  };

  return (
    <ScrollView bgColor="white" flex={1} p={5}>
      <Image source={Logo} alt="Logo" mt={10} />
      <Title>{secoes[secao - 1].title}</Title>
      <Box>
        {
          secoes[secao - 1].inputs.map(input => (
            <Input
              key={input.id}
              {...input}
            />
          ))
        }
      </Box>
      <Button onPress={avancarSecao} mb={10}>
        Avançar
      </Button>
    </ScrollView>
  );
}