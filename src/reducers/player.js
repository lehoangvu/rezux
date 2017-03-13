const intinalState = {
    "response": {
        "msgCode": 1,
        "msg": ""
    }
}

export default (state = intinalState, action) => {
    switch(action.type){
        case 'FETCH':
            return {
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
