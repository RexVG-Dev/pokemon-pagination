import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'src/app/store';

export function Favorites() {
  const navigate = useNavigate();

  const stateFavorites = useSelector((state: RootState) => state.favorites);

  return (
    <div>
      <button onClick={() => navigate('/')}>Home</button>
      <h2>Favorites</h2>
      <div>
        {stateFavorites.map(pokemon => (
          <div>
            <h3>{pokemon.name}</h3>
            <img alt={pokemon.name}  src={pokemon.sprites.other?.dream_world?.front_default} width={300}/>
          </div>
        ))}
      </div>
    </div>
  )
}