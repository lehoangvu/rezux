export const fetchById = (id) => {
    return dispatch => {
        $.ajax({
            url: "/pharser",
            data: {request: "http://api.mp3.zing.vn/api/mobile/song/getsonginfo?requestdata={%22id%22:%22"+id+"%22}"},
            type: 'POST',
            dataType: 'JSON',
            crossDomain: true
        }).done((json)=>{

            // check error
            if(typeof json.response.is_error !== 'undefined' && json.response.is_error){
                dispatch({
                    type: 'FETCH_ERROR',
                    data: json.response
                });                    
            }else{
                dispatch({
                    type: 'FETCH',
                    data: json
                });
            }
        }).fail((xhr)=>{

        });
    }
};

export const setPlayerId = (id, rolloutPlaylist, rolloutId) => {
    return {
        type: 'SET_ID',
        id,
        rolloutPlaylist,
        rolloutId
    };
};

export const clearError = () => {
    return {
        type: 'CLEAR_ERROR'
    };
};
