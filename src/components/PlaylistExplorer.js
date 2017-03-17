import React from 'react';
import PlaylistCreator from './PlaylistCreator/';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/playlist.scss';
import Player from './Player';
// const PlaylistExplorer = ({ playlist, player, ownProps, actions }) => {
    
    
    
// };

class PlaylistExplorer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playlist: props.playlist,
            player: props.player,
        };
        if(typeof props.ownProps.params.song_id !== 'undefined'){
            props.actions.setPlayerId(props.ownProps.params.song_id);
        }
        this.actions = props.actions;
    }

    _onCreateNew (playlistName, callbackSongId) {
        this.actions.createNew(playlistName, callbackSongId);
    }

    componentDidMount(){

    }

    componentWillReceiveProps (nextProps) {
        if(typeof nextProps.ownProps.params.song_id !== 'undefined' && nextProps.ownProps.params.song_id !== this.state.player.player_id){
            this.actions.setPlayerId(nextProps.ownProps.params.song_id);     
            this.fetchPlayerId = true;
        }
        this.setState ({
            playlist: nextProps.playlist,
            player: nextProps.player,
        });
    }
    render(){
        let playlists;

        if(this.state.playlist.data.length > 0){
            playlists = this.state.playlist.data.map((playlist, index) => {
                return (
                    <div className={s.item} key={index}>
                        <h4>{playlist.name}({playlist.list.length})</h4>
                    </div>
                );
            });
        }
        return (
            <div>
                <div className={s.root}>
                    <h3 className={s.heading}>Danh sách Playlist</h3>
                    {playlists}
                    <PlaylistCreator state={this.state.playlist} onCreateNew={this._onCreateNew} onHideClick={this.actions.onHideClick} addSongToPlaylist={this.actions.addSongToPlaylist} />
                </div>
                <Player key={this.state.player.player_id} state={this.state.player} fetch={this.actions.fetchById} />
            </div>
        );

    }
}

export default withStyles(s)(PlaylistExplorer);
