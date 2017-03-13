import React from 'react';

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
