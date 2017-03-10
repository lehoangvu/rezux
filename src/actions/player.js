export const fetchById = (id) => {
    return dispatch => {
        $.ajax({
            url: "http://trondesign.vn/parser.php",
            data: {request: "http://api.mp3.zing.vn/api/mobile/song/getsonginfo?requestdata={%22id%22:%22"+id+"%22}"},
            type: 'POST',
            dataType: 'JSON',
            crossDomain: true
        }).done((json)=>{
            dispatch({
                type: 'FETCH',
                data: json
            });
            
        }).fail((xhr)=>{

        });
    }
};