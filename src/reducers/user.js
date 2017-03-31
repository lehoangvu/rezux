const intinalState = {
	uid: false,
	fbToken: false,
	ggToken: false,
	email: '',
	name: '',
	displayName: ''
}

export default (state = intinalState, action) => {
    switch(action.type){
        case 'USERDATA_PARSED':
        	// action[user]
        	return {
        		...state,
        		...action.user
        	}
        case 'USERDATA_COMMITED':
        	return {
        		...state
        	}
        	break;
        case 'LOGIN_FB_SUCCESS':
    		// save uid to local
    		localStorage.setItem('uid', action.user.uid);
        	return {
        		...state,
        		...action.user
        	}
        	break;
        default:
            return state;
    }
}