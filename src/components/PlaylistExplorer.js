import React from 'react';
import PlaylistCreator from './PlaylistCreator/';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/playlist.scss';
import Player from './Player';
const PlaylistExplorer = ({ state, player, ownProps, actions }) => {
    
    let playlists;

    if(state.data.length > 0){
        playlists = state.data.map((playlist, index) => {
            return (
                <div className={s.item} key={index}>
                    <h4>{playlist.name}({playlist.list.length})</h4>
                </div>
            );
        });
    }

    const _onCreateNew = (playlistName, callbackSongId) => {
        actions.createNew(playlistName, callbackSongId);
    };

    let playerProps = player;

    if(typeof ownProps.params.song_id !== 'undefined'){
        playerProps.player_id = ownProps.params.song_id;
    }
    
    return (
        <div>
            <div className={s.root}>
                <h3 className={s.heading}>Danh sách Playlist</h3>
                {playlists}
                <PlaylistCreator state={state} onCreateNew={_onCreateNew} onHideClick={actions.onHideClick} addSongToPlaylist={actions.addSongToPlaylist} />
            </div>
            <Player state={playerProps} fetch={actions.fetchById} />
        </div>
	);
};
export default withStyles(s)(PlaylistExplorer);
