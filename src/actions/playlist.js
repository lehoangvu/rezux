export const showPopupAddToPlaylist = (songId) => {
    return {
        type: 'SHOW_POPUP_ADDTOPLAYLIST',
        songId: songId
    };
};

export const hidePopupAddToPlaylist = () => {
    return {
        type: 'HIDE_POPUP_ADDTOPLAYLIST'
    };
};

export const addSongToPlaylist = (songObj, playlistId) => {
    return {
        type: 'ADD_SONG',
        songObj,
        playlistId
    };
};

export const createNew = (playlistName = 'Untitled', callbackSongId = []) => {
    // store
    const newPlaylist = {
        name: playlistName,
        list: Array.isArray(callbackSongId) && callbackSongId.length > 0 ? callbackSongId : [callbackSongId]
    };
    return {
        type: 'CREATE_NEW_OK',
        newPlaylist
    }
};

export const setCurentPlaylist = (index) => {
    return {
        type: 'SET_CURRENT',
        index
    }
};
