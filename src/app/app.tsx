import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ROUTES } from './routes';

import styles from './app.module.scss';

import { store } from './store';

export function App() {
  return (
    <Provider store={store}>
      <div className={styles.main}>
        <BrowserRouter>
          <Routes>
            {ROUTES.map((route, index) => (
              <Route key={`${route}-${index}`} path={route.path} element={<route.component />}/>
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
