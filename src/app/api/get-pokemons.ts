import {BASE_URL} from './constants';

export async function getPokemons(offset = 0) {
  try {
    const response  = await fetch(`${BASE_URL}?offset=${offset}&limit=20`);

    // TODO handle error cases (response fails)

    const data = await response.json();
    return data;
  } catch(error){
    console.error('Error fetching list:', error);
    return null;
  }
}