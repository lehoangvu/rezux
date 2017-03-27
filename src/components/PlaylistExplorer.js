import React from 'react';
import {Link} from 'react-router';
import PlaylistCreator from './PlaylistCreator/';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/playlist.scss';
import i from './css/song-item.scss';
import Player from './Player';

import {coloring} from './../helpers/colors';

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
        let playlist_id = typeof props.ownProps.params.playlist_id !== 'undefined' ? props.ownProps.params.playlist_id : -1;
        if(playlist_id !== props.playlist.currentIndex){
            this.actions.setCurentPlaylist(playlist_id);
        }

        if(typeof props.ownProps.params.song_id !== 'undefined' && props.ownProps.params.song_id !== props.player.player_id){
            this.actions.setPlayerId(props.ownProps.params.song_id);     
            // this.fetchPlayerId = true;
        }


        // this.setState ({
        //     playlist: props.playlist,
        //     player: props.player,
        // });
    }

    _onCreateNew (playlistName, callbackSongId) {
        this.actions.createNew(playlistName, callbackSongId);
    }

    setTitle(){
        const playlist = this.props.playlist;
        if(parseInt(playlist.currentIndex) !== -1){
            document.title = playlist.data[playlist.currentIndex].name;
        }else{
            document.title = 'Rezux - Chỉ để vui';
        }
    }

    componentDidUpdate(){
        this.setTitle();
    }

    componentDidMount(){
        this.parseProps(this.props);
    }

    componentWillReceiveProps (nextProps) {
        this.parseProps(nextProps);
    }


    render(){
        const playlist = this.props.playlist;
        const player = this.props.player;
        let directoryTitle = <h3>Danh sách Playlist</h3>;

        let playlists, playerDom;

        if(playlist.currentIndex === -1){   

            playerDom = <Player key={player.player_id} state={player} fetch={this.actions.fetchById} />;

            if(playlist.data.length > 0){
                playlists = playlist.data.map((playlist, index) => {
                    return (
                        <Link to={window.basePath + index } className={s.item} key={index} >
                            {playlist.name}({playlist.list.length})
                        </Link>
                    );
                });
            }else{
                playlists = <p className={s.empty}>Chưa có Playlist nào!</p>
            }
        } else {
            let selectedPlaylist = playlist.data[playlist.currentIndex];
            directoryTitle = <h3 className={s.directoryTitle}>
                        <Link to={window.basePath}>
                            <span className="ion-ios-arrow-thin-left"/>
                        </Link>
                        {selectedPlaylist.name}
                    </h3>;

            playerDom = <Player selectedPlaylist={selectedPlaylist} key={player.player_id} state={player} fetch={this.actions.fetchById} />;

            if(selectedPlaylist.list.length > 0){
                playlists = selectedPlaylist.list.map((song, index) => {
                    return <li className={i.root}>
                        <Link to={window.basePath + playlist.currentIndex + '/' + song.id} className={i.link} >
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
                    <PlaylistCreator playlist={playlist} onCreateNew={this._onCreateNew.bind(this)} onHideClick={this.actions.onHideClick} addSongToPlaylist={this.actions.addSongToPlaylist} />
                </div>

                {playerDom}
            </div>
        );

    }
}

export default withStyles([s, i])(PlaylistExplorer);
