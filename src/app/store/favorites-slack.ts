import { createSlice } from "@reduxjs/toolkit";

import { PokemonType } from '../types';

const initialState: PokemonType[] = [];

export const favoritesSlack = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.push(action.payload);
    },
    removeFavorites: (state, action) => {
      const pokemonFound = state.find((pokemon) => pokemon.id === action.payload);
      if(pokemonFound) {
        state.splice(state.indexOf(pokemonFound), 1);
      }
    }
  }
})

export const { addFavorites, removeFavorites } = favoritesSlack.actions;

export default favoritesSlack.reducer;