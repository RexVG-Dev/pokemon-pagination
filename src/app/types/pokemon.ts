import { ValueOf } from 'type-fest';

export type ListPokemonsType = {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonResulType[];
}

export type PokemonResulType = {
  name: string;
  url: string;
};

export type PokemonResulIdType = PokemonResulType & {
  id: string;
}

export type PokemonType  = {
  name: string;
  height: number;
  weight: number;
  id: number;
  sprites: SpritesType;
  type: ClassType[];
  abilities: AbilityType[];
}

type SpritesType = {
  back_default?: string;
  front_default?: string;
  other?: {
    dream_world?: {
      front_default?: string;
    };
  }
}

type AbilityType = {
  ability: {
    name: string;
    url: string;
  },
  slot: number;
}

type ClassType = {
  slot: number;
  type: {
    name: ValueOf<typeof NAME_TYPE>;
    url: string;
  }
}

export const NAME_TYPE = {
  normal: 'normal',
  fighting: 'fighting',
  flying: 'flying',
  poison: 'poison',
  ground: 'ground',
  rock: 'rock',
  bug: 'bug',
  ghost: 'ghost',
  steel: 'steel',
  fire: 'fire',
  water: 'water',
  grass: 'grass',
  electric: 'electric',
  psychic: 'psychic',
  ice: 'ice',
  dragon: 'dragon',
  dark: 'dark',
  fairy: 'fairy',
}

