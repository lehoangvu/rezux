const intinalState = {    
    showAddPopup: false,
    callbackSongId: false,
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
        case 'CREATE_NEW_OK':
            let newData = state.data;
            newData.push(action.newPlaylist);
            return {
                ...state,
                data: newData
            };
            break;
        case 'SHOW_POPUP_ADDTOPLAYLIST':
            return {
                ...state,
                callbackSongId: action.songId,
                showAddPopup: true
            };
            break;
        case 'HIDE_POPUP_ADDTOPLAYLIST':
            return {
                ...state,
                callbackSongId: false,
                showAddPopup: false
            };
            break;
        default:
            return state;
    }
};
