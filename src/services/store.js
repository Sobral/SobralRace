import { createStore, combineReducers } from 'redux';
import playerReducer from '../features/player/reducer';

const reducers = combineReducers({
  player: playerReducer,
});

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
