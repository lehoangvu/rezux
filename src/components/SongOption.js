import React from 'react';
import { Link, browserHistory } from 'react-router';

const SongOption = (props) => {
    const s = props.s;
    return (
        <div>
            {props.show&&<div className={s.optionWrap}>
                    <ul>
                        <li onClick={()=>{
                            props.onHideSongOption();
                            // props.onPlaySong(props.objectId);
                            // browserHistory.push('/all/'+props.objectId);
                        }}><Link to={window.basePath + '/all/'+props.objectId}>Nghe bây giờ</Link></li>
                        <li onClick={()=>{
                            props.onHideSongOption();
                            props.showPopupAddToPlaylist(props.objectId)
                        }}>Lưu vào Playlist</li>
                        <li onClick={props.onHideSongOption}>Đóng</li>
                    </ul>
                </div>}
        </div>
    );

}

export default SongOption;
