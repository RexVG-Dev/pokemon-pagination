import {BASE_URL} from './constants';

export async function getPokemonDetails(id: string) {
  try {
    const response  = await fetch(`${BASE_URL}${id}`);

    // TODO handle error cases (response fails)

    const data = await response.json();
    return data;
  } catch(error){
    console.error('Error fetching list:', error);
    return null;
  }
}
