export const showPopupAddToPlaylist = (songId) => {
    return {
        type: 'SHOW_POPUP_ADDTOPLAYLIST',
        id: songId
    };
};

export const hidePopupAddToPlaylist = () => {
    return {
        type: 'HIDE_POPUP_ADDTOPLAYLIST'
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
