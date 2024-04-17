import { PokemonType } from '../../../types';

import styles from './pokedex.module.scss';

type PokedexType = {
  pokemon: PokemonType
}

export function Pokedex({pokemon}: PokedexType) {
  return (
    <div className={styles.pokedex}>
      <div className={styles['pokedex__border']}>
        <div className={styles['pokedex__circles']}>
          <div className={styles['pokedex__circle-white']}>
            <div className={styles['pokedex__circle-blue']}/>
          </div>
          <div className={styles['pokedex__circle-red']}/>
          <div className={styles['pokedex__circle-yellow']}/>
          <div className={styles['pokedex__circle-green']}/>
          <div className={styles['pokedex__name']}>
            <p>{pokemon.name}</p>
          </div>
        </div>
        <div className={styles['pokedex__lines']}>
          <div className={styles['pokedex__line']}/>
          <div className={styles['pokedex__line']}/>
          <div className={styles['pokedex__line']}/>
        </div>
        <div className={styles['pokedex__frame']}>
          <div className={styles['pokedex__leds']}>
            <div className={styles['pokedex__led']}/>
            <div className={styles['pokedex__led']}/>
          </div>
          <div className={`${styles['pokedex__border']} ${styles['pokedex__bg-white']}`}>
            <div className={styles['pokedex__screen']}>
              
              <img
                src={pokemon.sprites.other?.dream_world?.front_default}
                alt={pokemon.name}
                className={styles['details__image']}
              />
            </div>
          </div>
          <div className={styles['pokedex__actions-sreen']}>
            <div className={styles['pokedex__second-circle-red']}/>
            <div className={styles['pokedex__lines-sreen']}>
              <div className={styles['pokedex__line-sreen']}/>
              <div className={styles['pokedex__line-sreen']}/>
              <div className={styles['pokedex__line-sreen']}/>
              <div className={styles['pokedex__line-sreen']}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}