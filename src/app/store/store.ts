import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorites-slack';
import detailsReducer from './pokemon-details-slack';


const rootReducer = combineReducers({
  details: detailsReducer,
  favorites: favoriteReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer
});

// export const store = configureStore({
//   reducer: {
//     details: detailsReducer,
//     favorites: favoriteReducer
//   }
// });