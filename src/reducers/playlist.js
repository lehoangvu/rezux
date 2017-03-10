const intinalState = {    
    showAddPopup: false,
    data: [
        {
            name: 'Yêu thích',
            list: []
        },
        {
            name: 'Nhạc trẻ',
            list: []
        }
    ]
};
export default (state = intinalState, action) => {
    switch(action.type){
        case 'GET_PLAYLIST':
            return {
                ...state
            };
            break;
        case 'SHOW_POPUP_ADDTOPLAYLIST':
            return {
                ...state,
                showAddPopup: true
            };
            break;
        case 'HIDE_POPUP_ADDTOPLAYLIST':
            return {
                ...state,
                showAddPopup: false
            };
            break;
        default:
            return state;
    }
};
