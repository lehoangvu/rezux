import React from 'react';
import {Link} from 'react-router';
import PlaylistCreator from './PlaylistCreator/';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/playlist.scss';
import i from './css/song-item.scss';
import Player from './Player';

import {coloring} from './../helpers/colors';

// const PlaylistExplorer = ({ playlist, player, ownProps, actions }) => {
// };

class PlaylistExplorer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playlist: props.playlist,
            player: props.player,
        };
        this.actions = props.actions;
    }

    parseProps(props){
        if(typeof props.ownProps.params.song_id !== 'undefined' && props.ownProps.params.song_id !== this.state.player.player_id){
            this.actions.setPlayerId(props.ownProps.params.song_id);     
            this.fetchPlayerId = true;
        }
        let playlist_id = typeof props.ownProps.params.playlist_id !== 'undefined' ? props.ownProps.params.playlist_id : -1;
        if(playlist_id !== this.state.playlist.currentIndex){
            this.actions.setCurentPlaylist(playlist_id);
        }
        this.setState ({
            playlist: props.playlist,
            player: props.player,
        });
    }

    _onCreateNew (playlistName, callbackSongId) {
        this.actions.createNew(playlistName, callbackSongId);
    }

    setTitle(){
        const state = this.state;
        if(state.playlist.currentIndex !== -1){
            document.title = this.state.playlist[state.playlist.currentIndex].name;
        }
    }

    componentDidMount(){
        this.parseProps(this.props);
        this.setTitle();
    }

    componentWillReceiveProps (nextProps) {

        this.parseProps(nextProps);
        this.setTitle();
        
    }
    render(){
        const state = this.state;
        let directoryTitle = <h3>Danh sách Playlist</h3>;
        let playlists;
        if(state.playlist.currentIndex === -1){   
            if(state.playlist.data.length > 0){
                playlists = state.playlist.data.map((playlist, index) => {
                    return (
                        <Link to={window.basePath + index } className={s.item} key={index} >
                            <h4>{playlist.name}({playlist.list.length})</h4>
                        </Link>
                    );
                });
            }else{
                playlists = <p className={s.empty}>Chưa có Playlist nào!</p>
            }
        } else {
            let selectedPlaylist = state.playlist.data[state.playlist.currentIndex];
            directoryTitle = <h3 className={s.directoryTitle}>
                        <Link to={window.basePath}>
                            <span className="ion-ios-arrow-thin-left"/>
                        </Link>
                        {selectedPlaylist.name}
                    </h3>;
            if(selectedPlaylist.list.length > 0){
                playlists = selectedPlaylist.list.map((song, index) => {
                    return <li className={i.root}>
                        <Link to={window.basePath + state.playlist.currentIndex + '/' + song.id} className={i.link} >
                            <span className={i.content}>
                                <span>{song.name}</span>
                                <span>{song.artist}</span>
                            </span>
                        </Link>
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
