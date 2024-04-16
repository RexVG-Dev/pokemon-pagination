import { useEffect, useState } from "react";

import { PokemonResulIdType, PokemonResulType } from "src/app/types";



export function useAdapterListWithId(pokemonList: PokemonResulType[]) {
  const [newList, setNewList] = useState<PokemonResulIdType[]>([]);

  const getIdByUrl = (url: string) => {
    const segments = url.split('/');
    const idValue = segments[segments.length - 2];
    return idValue;
  }

  useEffect(() => {
    if (!pokemonList || pokemonList.length === 0) return;
    const listAdapted = pokemonList.map(pokemon => ({
      ...pokemon,
      id: getIdByUrl(pokemon.url)
    }));

    setNewList(listAdapted)
  }, [pokemonList]);

  return newList;
}