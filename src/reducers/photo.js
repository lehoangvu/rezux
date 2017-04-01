import {appenUserData} from './../actions/user';
import store from './../store';

const intinalState = {
    albums: [
        {
            name: 'Ảnh mới',
            list: {}
        }
    ]

}

export default (state = intinalState, action) => {
    switch(action.type){
        case 'USERDATA_PARSED':
            return {
                ...state,
                ...action.userData.photo
            }
            break;

        case 'GET_THUMB_SUCCESS':{
            const newState = {
                ...state
            };
            newState.albums[0].list[action.key] = action.photo;
            return newState;
            break;
        }
        case 'UPLOAD_SUCCESS':
            const newState = {
                ...state
            };

            newState.albums[0].list[action.response.id] = action.response;
            appenUserData(store.getState().user.uid, {
                ...action.response,
                thumbnail: null
            }, 'photo/albums/0/list');
            return {
                ...newState
            }
            break;

        default:
            return state;
    }
}
