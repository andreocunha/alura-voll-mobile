import Routes from './src/routes';
import { NativeBaseProvider, Text, Box, StatusBar } from "native-base";

import { THEME } from './src/styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.blue[900]} />
      <Routes />
    </NativeBaseProvider>
  );
}