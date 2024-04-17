import {BASE_URL} from './constants';

export async function getPokemons(offset = 0) {
  const limit  = offset === 140 ? 11 : 20;
  try {
    const response  = await fetch(`${BASE_URL}?offset=${offset}&limit=${limit}`);

    // TODO handle error cases (response fails)

    const data = await response.json();
    return data;
  } catch(error){
    console.error('Error fetching list:', error);
    return null;
  }
}