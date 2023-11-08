import styles from './PokedexNavbar.module.css';

/* eslint-disable-next-line */
export interface PokedexNavbarProps {}

export function PokedexNavbar(props: PokedexNavbarProps) {
  return (
    <header>
      <div className={styles['header']}>
        <h1>Manuel Parra Rodriguez</h1>
      </div>
    </header>
  );
}

export default PokedexNavbar;
