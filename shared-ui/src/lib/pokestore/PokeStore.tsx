import { PokemonType } from '@manuel-workspace/shared-types';
import styles from './PokeStore.module.css';
import { PokeCard } from '@manuel-workspace/shared-ui';

type PokeStoreProps = {
  pokemon_list: PokemonType[],
}

function renderPokeCard(pokemon: PokemonType): JSX.Element{
    return <li><PokeCard pokemon={pokemon}/></li>
}

export function PokeStore({ pokemon_list } : PokeStoreProps) {
    const renderList: any = pokemon_list.map(pokemon => renderPokeCard(pokemon));
    return (
        <div className={styles['container']}>
        <ul>
            { renderList }
        </ul>
        </div>
    );
}
