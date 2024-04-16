import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState, removeDetails, addFavorites, removeFavorites } from '../../store';


export function Details() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stateDetails = useSelector((state: RootState) => state.details);
  const stateFavorites = useSelector((state: RootState) => state.favorites);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleBackButton = () => {
    dispatch(removeDetails());
    navigate('/');
  }

  const handleFavoriteState = () => {
    if (isFavorite) {
      dispatch(removeFavorites(stateDetails.id));
    } else {
      dispatch(addFavorites(stateDetails));
    }
  }

  useEffect(() => {
    if(stateFavorites.length > 0 && stateDetails) {
      const favorite = stateFavorites.some(favorite => favorite.id === stateDetails.id);
      setIsFavorite(favorite);
    }
  }, [stateDetails,stateFavorites])

  return (
    <div>
      <button onClick={handleBackButton}>back</button>
      <p>{stateDetails.name}</p>
      <button onClick={handleFavoriteState}>
        <span>{isFavorite ? 'Remove' : 'Add'}</span>
      </button>      
    </div>
  )
}