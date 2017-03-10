const intinalState = {
    "song_id": 1075365502,
    "song_id_encode": "ZW7WI6FE",
    "video_id_encode": "ZW7WI6FE",
    "title": "Chưa Bao Giờ",
    "artist_id": "7173",
    "artist": "Trung Quân Idol",
    "album_id": 0,
    "album": "",
    "composer_id": 3142,
    "composer": "Tiên Tiên",
    "genre_id": "1,8",
    "isrc": "",
    "zaloid": 0,
    "username": "mp3",
    "is_hit": 0,
    "is_official": 1,
    "duration": 275,
    "download_status": 1,
    "copyright": "",
    "co_id": 8,
    "ad_status": -1,
    "license_status": 0,
    "lyrics_file": "http://static.mp3.zdn.vn/lyrics/2016/d/e/dedb88aa3fa8badaba34f46baa2f2183_1075365502.lrc",
    "vn_only": true,
    "total_play": 136777939,
    "link": "/bai-hat/Chua-Bao-Gio-Trung-Quan-Idol/ZW7WI6FE.html",
    "source": {
        "128": "http://api.mp3.zing.vn/api/mobile/source/song/LGJGTLGNQVXQQGDTLDJTDGLG",
        "320": "http://api.mp3.zing.vn/api/mobile/source/song/LGJGTLGNQVXQQGDTVDGTDGLG",
        "lossless": "http://api.mp3.zing.vn/api/mobile/source/song/LGJGTLGNQVXQQGDTUOKKUMKKTDGLG"
    },
    "link_download": {
        "128": "http://api.mp3.zing.vn/api/mobile/download/song/LGJGTLGNQVXQQGDTLDJTDGLG",
        "320": "http://api.mp3.zing.vn/api/mobile/download/song/LGJGTLGNQVXQQGDTVDGTDGLG",
        "lossless": "http://api.mp3.zing.vn/api/mobile/download/song/LGJGTLGNQVXQQGDTUOKKUMKKTDGLG"
    },
    "thumbnail": "avatars/c/2/c2a3d208432ea874dd3104f8c11a660f_1478501811.jpg",
    "album_cover": "avatars/c/2/c2a3d208432ea874dd3104f8c11a660f_1478501811.jpg",
    "likes": 0,
    "like_this": false,
    "favourites": 0,
    "favourite_this": false,
    "comments": 0,
    "genre_name": "Việt Nam, Nhạc Trẻ",
    "video": {
        "video_id": 1075365502,
        "song_id_encode": "ZW7WI6FE",
        "title": "Chưa Bao Giờ",
        "artist": "Trung Quân Idol",
        "thumbnail": "thumb_video/e/8/e89ee5c2db2fc3fc2afe3b228afcefef_1439532411.jpg",
        "duration": 346,
        "download_status": 1,
        "copyright": 8,
        "co_id": 8,
        "ad_status": -1,
        "license_status": 0
    },
    "response": {
        "msgCode": 1,
        "msg": ""
    }
}

export default (state = intinalState, action) => {
    switch(action.type){
        case 'FETCH':
            return {
                ...action.data
            };
            break;
        default:
            return state;
    }
}
