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
                response: {
                    msgCode: 1,
                    msg: ""
                },
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
        case 'CLEAR_ERROR':
            return {
                ...state,
                response: {
                    msgCode: 1,
                    msg: ""
                }
            };
            break;
        default:
            return state;
    }
}
