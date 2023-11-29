import { Container } from '@chakra-ui/react';
import  pokemon_list from './pokemon-list.json'
import { PokedexNavbar, PokeStore, PokeTrainer } from '@manuel-workspace/shared-ui'

export function App() {
  return (
    <>
      <PokedexNavbar />
      <PokeTrainer />
      <PokeStore pokemon_list={pokemon_list} />
    </>
  );
}

export default App;
