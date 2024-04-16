import { createSlice } from "@reduxjs/toolkit";

import { PokemonType } from '../types';

const initialState: PokemonType = {
  name: '',
  height: 0,
  weight: 0,
  id: 0,
  sprites: {},
  type: [],
  abilities: []
};


export const detailsSlack = createSlice({
  name: 'details',
  initialState: initialState,
  reducers: {
    addDetails: (state, action) => {
      console.log('action: ', action);
      return action.payload;
    },
    removeDetails: (state) => {
      state = initialState;
    }
  }
})

export const { addDetails, removeDetails } = detailsSlack.actions;

export default detailsSlack.reducer;