const playlistDb = {
    get: () => {
        let playlist = localStorage.getItem('db_playlist');
        if(playlist){
            return JSON.parse(playlist);
        }
        return [];
    },
    set: (data) => {
        localStorage.setItem('db_playlist', JSON.stringify(data));
    }
};

function savePlaylistToDb(playlist){
    localStorage.setItem('playlist_db', JSON.stringify(playlist));
}
function getPlaylistFromDb(playlist){
    localStorage.setItem('playlist_db', JSON.stringify(playlist));
}
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
    // data: playlistDb.get()
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
            playlistDb.set(newData);
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
            let finalState = state;
            finalState.data[action.playlistId].list = addToPlaylist(finalState.data[action.playlistId].list, action.songId);
            playlistDb.set(finalState.data);
            return {
                ...finalState,
                callbackSongId: false,
                showAddPopup: false
            };
            break;
        default:
            return state;
    }
};
