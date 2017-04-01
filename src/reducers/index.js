import { combineReducers } from 'redux';
import search from './search';
import playlist from './playlist';
import player from './player';
import user from './user';
import photo from './photo';

const reducer = combineReducers({
	search,
    player,
	playlist,
	user,
    photo
});

export default reducer;
