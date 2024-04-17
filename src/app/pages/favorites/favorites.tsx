import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { IconButton } from '../../components/icon-button';

import backArrow from '../../../assets/icons/arrow.svg';

import styles from './favorites.module.scss';

export function Favorites() {
  const navigate = useNavigate();

  const stateFavorites = useSelector((state: RootState) => state.favorites);

  return (
    <div className={styles.favorites}>
      <IconButton size='medium' kind='primary' onClick={() => navigate('/')}>
        <img src={backArrow} alt="go to home icon" className={styles['favorites__arrow']}/>
      </IconButton>
      <div className={styles['favorites__container']}>
        <p className={styles['favorites__title']}>Favorites</p>
        <div className={styles['favorites__list']}>
          {stateFavorites.map(pokemon => (
            <div className={styles['favorites__pokemon']}>
              <img
                className={styles['favorites__image']}
                alt={pokemon.name}
                src={pokemon.sprites.other?.dream_world?.front_default}
              />
              <span className={styles['favorites__pokemon-title']}>{pokemon.name}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}