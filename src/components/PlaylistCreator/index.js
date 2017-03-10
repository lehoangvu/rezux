import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

const PlaylistCreator = (props) => {
    const state = props.state;
    let playlists;
    if(state.data.length > 0){
        playlists = state.data.map((playlist) => {
            return (
                <div className={s.item}>
                    <h4>{playlist.name}</h4>
                </div>
            );
        });
    }

    return (
        <div>
            {state.showAddPopup && 
            <div className={s.root}>
                <div className={s.container}>
                    <h3 className={s.heading}>Danh sách Playlist</h3>
                    {playlists}
                </div>
            </div>}
        </div>
        )
};
export default withStyles(s)(PlaylistCreator);
