const intinalState = {    
    showAddPopup: false,
    callbackSongId: false,
    currentIndex: -1,
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

const addToPlaylist = (list, songId) => {
    let newList = list;
    if(Array.isArray(songId)){
        songId.map((id, index) => {
            if(newList.indexOf(id) === -1){
                newList.push(id);
            }
        });
    }else{
        if(newList.indexOf(songId) === -1){
            newList.push(songId);
        }
    }
    return newList;
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
        case 'ADD_SONG':
            let originState = state;
            originState.data[action.playlistId].list = addToPlaylist(originState.data[action.playlistId].list, action.songId);
            return {
                ...originState,
                callbackSongId: false,
                showAddPopup: false
            };
            break;
        default:
            return state;
    }
};
