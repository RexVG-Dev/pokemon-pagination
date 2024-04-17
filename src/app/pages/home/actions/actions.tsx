import Pagination from 'rc-pagination';
import "rc-pagination/assets/index.css";
import { useNavigate } from 'react-router-dom';

import styles from './actions.module.scss';
import { Button } from '../../../components/button';

type ActionsType = {
  current: number;
  onChange: (page:number) => void;
}

export function Actions({
  current,
  onChange
}: ActionsType) {
  const navigate = useNavigate();
  const goToFavorites = () => {
    navigate('/favorites');
  }

  return (
    <div className={styles.actions}>
      <div className={styles['actions__pagination']}>
        <Pagination 
          onChange={onChange}
          current={current} total={80}
          locale={{
            items_per_page: '20'
          }}
        />
      </div>
      <Button onClick={goToFavorites} kind='secondary' size='large'> Go to your favorites pokemon</Button>
    </div>
  )
}