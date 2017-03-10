import React from 'react';
import { hideSongOption } from './../actions/search';
import { showPopupAddToPlaylist } from '../actions/playlist';

const SongOption = (props) => {
    const s = props.s;
    return (
        <div>
            {props.show&&<div className={s.optionWrap}>
                    <ul>
                        <li onClick={()=>{
                            props.onHideSongOption();
                            props.onPlaySong(props.objectId);
                        }}>Nghe bây giờ</li>
                        <li style={{display: 'none'}} onClick={()=>{
                            props.onHideSongOption();
                            props.showPopupAddToPlaylist()
                        }}>Lưu vào Playlist</li>
                        <li onClick={props.onHideSongOption}>Đóng</li>
                    </ul>
                </div>}
        </div>
    );

}

export default SongOption;
