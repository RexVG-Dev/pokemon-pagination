import { useEffect, useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addDetails } from "../../store";
import { getPokemonDetails } from "../../api";
import { PokemonType } from "src/app/types";

import styles from './pokemon.module.scss';

type PokemonComponentType = {
  id: string;
  handleDialog: (value: boolean) => void;
}

export function Pokemon({
  id,
  handleDialog,
}:PokemonComponentType) {
  const dispatch = useDispatch();
  const divRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonType>();
  const [clickCount, setClickCount] = useState(0);

  const fetchPokemon = async () => {
    try {
      const data = await getPokemonDetails(id);
      setPokemon(data);
    } catch (error) {
      console.error('Error fetching Pokemon :', error);
    }
  }

  const handleClicksCounter = () => {
    if (divRef.current) {
      setClickCount((prevCount) => prevCount + 1);
    }
  }

  useEffect(() => {
    if( id ) {
      fetchPokemon();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const handleClickTimeout = setTimeout(() => {
      if (clickCount === 1) {
        handleDialog(true);
      } else if (clickCount === 2) {
        dispatch(addDetails(pokemon));
        handleDialog(false);
        navigate(`/pokemon/${id}`);
      }

      setClickCount(0);
    }, 300);

    return () => {
      clearTimeout(handleClickTimeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickCount]);

  return (
    <div
      ref={divRef}
      onClick={handleClicksCounter}
      className={styles.pokemon}
    >
      <h1>{pokemon?.name}</h1>
    </div>
  )
}
