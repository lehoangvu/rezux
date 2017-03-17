const intinalState = {
    player_id: null,
    fetched: false,
    response: {
        msgCode: 1,
        msg: ""
    }
}

export default (state = intinalState, action) => {
    switch(action.type){
        case 'SET_ID':
            return {
                ...state,
                fetched: false,
                player_id: action.id,
                response: {
                    msgCode: 1,
                    msg: ""
                }
            };
            break;
        case 'FETCH':
            return {
                ...state,
                fetched: true,
                ...action.data
            };
            break;
        case 'FETCH_ERROR':
            return {
                ...state,
                response: {
                    ...action.data
                }
            };
            break;
        default:
            return state;
    }
}
