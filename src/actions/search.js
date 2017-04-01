import axios from 'axios';

export const getSuggess = (keyword) => {
    return dispatch => {
        // $.ajax({
        //     url: "http://ac.mp3.zing.vn/complete/desktop",
        //     type: 'GET',
        //     data: {
        //         type: 'artist,album,video,song',
        //         num: 10,
        //         query: keyword
        //     },
        //     dataType: 'JSON',
        // }).done((json)=>{
        //     dispatch({
        //         type: 'GET_SUGGESS',    
        //         keyword: keyword,
        //         data: json.data
        //     });
            
        // }).fail((xhr)=>{

        // });
        axios.get("http://ac.mp3.zing.vn/complete/desktop", {
            params: {
                type: 'artist,album,video,song',
                num: 20,
                query: keyword
            }
        }).then((response)=>{
            dispatch({
                type: 'GET_SUGGESS',    
                keyword: keyword,
                data: response.data.data
            });
        }).catch((error)=>{

        });
    }
};
export const addSongToPlaylist = (songObj, playlistId) => {
    return {
        type: 'ADD_SONG',
        songObj,
        playlistId
    };
};

export const showSuggess = () => {
    return {
        type: 'SHOW_SUGGESS'
    };
};
export const showSongOption = (object) => {
    return {
        type: 'SHOW_SONG_OPTION',
        object
    };
};
export const hideSongOption = () => {
    return {
        type: 'HIDE_SONG_OPTION'
    };
};
export const hideSuggess = () => {
    return dispatch => {
        setTimeout(()=>{
            dispatch({
                type: 'HIDE_SUGGESS'
            })
        }, 500);
    };
};
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
