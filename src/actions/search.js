export const getSuggess = (keyword) => {
    return dispatch => {
        $.ajax({
            url: "http://ac.mp3.zing.vn/complete/desktop",
            type: 'GET',
            data: {
                type: 'artist,album,video,song',
                num: 10,
                query: keyword
            },
            dataType: 'JSON',
        }).done((json)=>{
            dispatch({
                type: 'GET_SUGGESS',    
                keyword: keyword,
                data: json.data
            });
            
        }).fail((xhr)=>{

        });
    }
};
export const showSuggess = () => {
    return {
        type: 'SHOW_SUGGESS'
    };
};
export const showSongOption = (id) => {
    return {
        type: 'SHOW_SONG_OPTION',
        id: id
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
