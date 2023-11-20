import  pokemon_list from './pokemon-list.json'
import { PokedexNavbar, PokeStore } from '@manuel-workspace/shared-ui'

export function App() {
  return (
    <div>
      <PokedexNavbar />
      <PokeStore pokemon_list={pokemon_list} />
    </div>
  );
}

export default App;
