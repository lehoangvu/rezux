import { combineReducers } from 'redux';
import search from './search';
import playlist from './playlist';
import player from './player';
import user from './user';

const reducer = combineReducers({
	search,
    player,
	playlist,
	user
});

export default reducer;
