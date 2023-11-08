import styles from './PokeStore.module.css';

/* eslint-disable-next-line */
export interface PokeStoreProps {}

export function PokeStore(props: PokeStoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PokeStore!</h1>
    </div>
  );
}

export default PokeStore;
