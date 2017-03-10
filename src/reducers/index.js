import { combineReducers } from 'redux';
import search from './search';
import playlist from './playlist';
import player from './player';

const reducer = combineReducers({
	search,
    player,
	playlist
});

export default reducer;
