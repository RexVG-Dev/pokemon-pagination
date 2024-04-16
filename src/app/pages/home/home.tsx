import { useEffect, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { ListPokemonsType } from 'src/app/types';

import { getPokemons } from '../../api';

import { Pokemon } from '../../components/pokemon';
import { useAdapterListWithId } from './hooks/useAdapterListWithId';

import styles from './home.module.scss';

export function Home() {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [pokemonList, setPokemonList] = useState<ListPokemonsType>();
  const pokemonListAdapted = useAdapterListWithId(pokemonList?.results || []);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemonList(data);
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  }

  const handleClickCloseButton = (e:MouseEvent) => {
    e.stopPropagation();
    setShowDialog(false);
  }

  const handleDialog = (value:boolean) => {
    setShowDialog(value);
  }

  const goToFavorites = () => {
    navigate('/favorites');
  }

  useEffect(() => {
    fetchPokemons();
  }, []);
  
  return (
    <div className={styles.home}>
      {showDialog && (
        <dialog open>
          <h2>Dialog Content</h2>
          <button onClick={handleClickCloseButton}>Close</button>
        </dialog>
      )}
      <button onClick={goToFavorites}>Go favorites</button>
      <div className={styles['home__pokemon-list']}>
        {pokemonListAdapted?.map(pokemon => (
          <Pokemon
            id={pokemon.id}
            key={pokemon.id}
            handleDialog={handleDialog}
          />
        ))}
      </div>
    </div>
  )
}
