import firebase from './../store/FirebaseInstance';
import dx from './../store/dropbox';
import store from './../store';

export const upload = (file) => {
    const user = store.getState().user;
    if(user.uid && user.dxToken !== ''){
        return dispatch => {
            dx.accessToken = user.dxToken;
            dx.filesUpload({path: '/' + file.name, contents: file})
            .then((response) => {
                dx.filesGetThumbnail({
                    path: response.path_lower,
                    format: 'png',
                    size: 'w128h128'
                })
                .then((thumbResponse) => {
                    response.thumbnail = thumbResponse;
                    dispatch({
                        type: 'UPLOAD_SUCCESS',
                        response
                    });
                });
            })
            .catch((error) => {
              dispatch({
                type: 'UPLOAD_ERROR',
                error
              });
            });
        };
    }else{
        return {
            type: 'UPLOAD_REQUIRE_LOGIN'
        }
    }
}

export const getThumbnail = (photo, key) => {
    const user = store.getState().user;
    if(user.uid && user.dxToken !== ''){
        return dispatch => {
            dx.accessToken = user.dxToken;
            dx.filesGetThumbnail({
                path: photo.path_lower,
                format: 'png',
                size: 'w128h128'
            }).then((response)=>{
                photo.thumbnail = response;
                dispatch({
                    type: 'GET_THUMB_SUCCESS',
                    photo,
                    key
                });
            })
        };
    }
}
