import {commitUserData} from './../actions/user';
const intinalState = {
    uid: false,
    fbToken: '',
    ggToken: '',
    dxToken: '',
    email: '',
    name: '',
    displayName: '',
}
export default (state = intinalState, action) => {
    switch(action.type){
        case 'USERDATA_PARSED':
        	// action[user]
        	return {
        		...state,
        		...action.userData.user

        	}
        case 'USERDATA_COMMITED':
            return {
                ...state
            }
            break;
        case 'CONNECT_DX_SUCCESS':
            const newState = {
                ...state,
                dxToken: action.accessToken
            };
            if(state.uid !== false){
                commitUserData(newState.uid, newState, 'user');
            }
            return newState;
            break;
        case 'LOGIN_SOCIAL_SUCCESS':{
            // save uid to local
            const newState = {
                ...state,
                ...action.user
            };
            localStorage.setItem('uid', action.user.uid);
            commitUserData(newState.uid, newState, 'user');
        	return newState
        	break;
        }
        default:
            return state;
    }
}