import { PokemonType } from 'shared-types/src/lib/shared-types';
import styles from './PokeCard.module.css';

type PokeCardProps = {
  pokemon: PokemonType
}

export function PokeCard({ pokemon } : PokeCardProps) {
  return (
    <div className={styles['container']} id='1'>
      <h1>Ditto</h1>
      <label>2</label>
    </div>
  );
}