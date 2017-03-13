import React from 'react';
import PlaylistCreator from './PlaylistCreator/';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/playlist.scss';

const Playlist = ({ state, actions }) => {

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

    const _onCreateNew = (playlistName, callbackSongId) => {
        actions.createNew(playlistName, callbackSongId);
    };

	return (
        <div className={s.root}>
            <h3 className={s.heading}>Danh sách Playlist</h3>
            {playlists}
            <PlaylistCreator state={state} onCreateNew={_onCreateNew} onHideClick={actions.onHideClick} />
        </div>
	);
};
export default withStyles(s)(Playlist);
