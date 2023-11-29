import { ChakraProvider } from '@chakra-ui/react';
import { PokedexNavbar } from '@manuel-workspace/shared-ui';

export function App() {
  return (
    <ChakraProvider>
      <PokedexNavbar />
    </ChakraProvider>
  );
}

export default App;
