export const fetchById = (id) => {
    return dispatch => {
        $.ajax({
            url: "http://trondesign.vn/parser.php",
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
            }

            dispatch({
                type: 'FETCH',
                data: json
            });
            
        }).fail((xhr)=>{

        });
    }
};