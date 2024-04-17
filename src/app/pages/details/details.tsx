import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState, removeDetails, addFavorites, removeFavorites } from '../../store';
import { IconButton } from '../../components/icon-button';
import { Button } from '../../components/button';

import { Pokedex } from './pokedex';

import backArrow from '../../../assets/icons/arrow.svg';

import styles from './details.module.scss';

export function Details() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pokemon = useSelector((state: RootState) => state.details);
  const stateFavorites = useSelector((state: RootState) => state.favorites);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleBackButton = () => {
    dispatch(removeDetails());
    navigate('/');
  }

  const handleFavoriteState = () => {
    if (isFavorite) {
      dispatch(removeFavorites(pokemon.id));
    } else {
      dispatch(addFavorites(pokemon));
    }
  }

  useEffect(() => {
    if(stateFavorites.length > 0 && pokemon) {
      const favorite = stateFavorites.some(favorite => favorite.id === pokemon.id);
      setIsFavorite(favorite);
    }
  }, [pokemon,stateFavorites])

  return (
    <div className={styles.details}>
      <IconButton size='medium' kind='primary' onClick={handleBackButton}>
        <img src={backArrow} alt="go to home icon" className={styles['details__arrow']}/>
      </IconButton>
      <div className={styles['details__container']}>
        <div className={styles['details__pokedex']}>
          <Pokedex pokemon={pokemon}/>
        </div>
        <div className={styles['details__info']}>
          <p className={styles['details__name']}>{pokemon.name.toUpperCase()}</p>
          <Button size='fluid' kind='light' onClick={handleFavoriteState}>
            <span>
              {isFavorite 
                ? 'Remove of my favorites'
                : 'Add to my favorites'
              }
            </span>
          </Button>

          <div className={styles['details__data']}>
            <p>
              <b>Height:</b> <br />
              <span>{pokemon.height}</span>
            </p>
            <p>
              <b>Weight: </b> <br />
              <span>{pokemon.weight}</span>
            </p>
            <p>
              <b>Abilities: </b><br />
              {pokemon.abilities.map(ability => (
                <span>{ability.ability.name}, </span>
              ))}
            </p>

            <div className={styles['details__stats']}>
              <span className={styles['details__stats-title']}>Stats</span>
              { pokemon.stats.map(stat => (
                <div className={styles['details__stat']} key={stat.stat.name}>
                  <span
                    className={styles['details__title']}
                  >
                    {stat.stat.name.toUpperCase()}
                  </span>
                  <div className={styles['details__progress-bar']}>
                    <progress
                      className={styles['details__bar']}
                      value={stat.base_stat}
                      max={100}
                    />
                    <span
                      className={styles['details__bar-value']}
                    >
                      {`(${stat.base_stat})`}
                    </span>
                  </div>
                  
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
           
    </div>
  )
}