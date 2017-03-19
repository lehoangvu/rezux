const intinalState = {
    suggess: {
        show: false,
        message: 'Gõ để tìm kiếm',
        result: false,
        data: [
        {
          "artist": [
          ]
        },
        {
          "album": []
        },
        {
          "video": []
        },
        {
          "song": []
        }
      ]
    },
    keyword: '',
    showSongOption: false,
    optionObjectId: -1
};

const getMessage = (search) => {
    const artists = search.suggess.data[0].artist;
    const albums = search.suggess.data[1].album;
    const videos = search.suggess.data[2].video;
    const songs = search.suggess.data[3].song;
    if(search.keyword.length === 0)
        return 'Gõ để tìm kiếm bài hát';
    if(artists.length === 0
        && albums.length === 0 
        && videos.length === 0 
        && songs.length === 0){
        return 'Không có kết quả';
    }

    return '';
}

export default (state = intinalState, action) => {
    switch(action.type){
        case 'HIDE_SONG_OPTION':
            return {
                ...state,
                showSongOption: false
            };
            break;
        case 'SHOW_SONG_OPTION':
            return {
                ...state,
                object: action.object,
                showSongOption: true
            };
            break;
        case 'GET_SUGGESS':
            return {
                ...state,
                keyword: action.keyword,
                suggess: {
                    ...state.suggess,
                    data: action.data
                }
            };
            break;
        case 'SHOW_SUGGESS':
            return {
                ...state,
                suggess: {
                    ...state.suggess,
                    message: getMessage(state),
                    show: true
                }
            };
            break;
        case 'HIDE_SUGGESS':
            return {
                ...state,
                suggess: {
                    ...state.suggess,
                    show: false
                }
            };
            break;
        default:
            return state;
    }
};
