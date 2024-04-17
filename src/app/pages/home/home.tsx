import { useEffect, useState, MouseEvent } from 'react';

import { ListPokemonsType } from 'src/app/types';

import { getPokemons } from '../../api';

import { Pokemon } from '../../components/pokemon';
import { useAdapterListWithId } from './hooks/useAdapterListWithId';

import styles from './home.module.scss';
import { Modal } from '../../components/modal';
import { Actions } from './actions';

export function Home() {
  const [current, setCurrent] = useState(1);
  const [showDialog, setShowDialog] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>();

  const [pokemonList, setPokemonList] = useState<ListPokemonsType>();
  const pokemonListAdapted = useAdapterListWithId(pokemonList?.results || []);

  const fetchPokemons = async (page = 0) => {
    try {
      const data = await getPokemons(page);
      setPokemonList(data);
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  }

  const handleClickCloseButton = (e:MouseEvent) => {
    e.stopPropagation();
    setShowDialog(false);
  }

  const handleDialog = (value:boolean, imgUrl?: string) => {
    setShowDialog(value);
    setImgUrl(imgUrl);
  }

  const onChange = (page:number) => {
    const offset = (page-1) * 20;
    fetchPokemons(offset);
    setCurrent(page);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  
  return (
    <div className={styles.home}>
      {showDialog && (
        <Modal
          imgUrl= {imgUrl} 
          clickCloseButton={handleClickCloseButton}
          />
      )}
      <Actions onChange={onChange} current={current}/>
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
