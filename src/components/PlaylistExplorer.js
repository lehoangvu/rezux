import React from 'react';
import PlaylistCreator from './PlaylistCreator/';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/playlist.scss';
import i from './css/song-item.scss';
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
        const state = this.state;
        let directoryTitle = <h3>Danh sách Playlist</h3>;
        let playlists;
        if(state.playlist.currentIndex === -1){   
            if(state.playlist.data.length > 0){
                playlists = state.playlist.data.map((playlist, index) => {
                    return (
                        <div className={s.item} key={index} onClick={()=>{this.actions.setCurentPlaylist(index)}}>
                            <h4>{playlist.name}({playlist.list.length})</h4>
                        </div>
                    );
                });
            }
        } else {
            let selectedPlaylist = state.playlist.data[state.playlist.currentIndex];
            directoryTitle = <h3 className={s.directoryTitle}>
                        <span className="ion-ios-arrow-thin-left" onClick={()=>{this.actions.setCurentPlaylist(-1)}}/>
                        {selectedPlaylist.name}
                    </h3>;
            if(selectedPlaylist.list.length > 0){
                playlists = selectedPlaylist.list.map((song, index) => {
                    return <li className={i.root}>
                        <a href="#" className={i.link} onClick={()=>{onSongClick(song)}} >
                            <span className={i.content}>
                                <span>{song.name}</span>
                                <span>{song.artist}</span>
                            </span>
                        </a>
                    </li>;
                });
            }else{
                playlists = <p className={s.empty}>Chưa có bài hát nào!</p>
            }
        }


        return (
            <div>
                <div className={s.root}>
                    {directoryTitle}
                    {playlists}
                    <PlaylistCreator state={state.playlist} onCreateNew={this._onCreateNew.bind(this)} onHideClick={this.actions.onHideClick} addSongToPlaylist={this.actions.addSongToPlaylist} />
                </div>

                <Player key={state.player.player_id} state={state.player} fetch={this.actions.fetchById} />
            </div>
        );

    }
}

export default withStyles([s, i])(PlaylistExplorer);
