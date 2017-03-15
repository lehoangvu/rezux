import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { getSuggess, showSuggess, hideSuggess, showSongOption, hideSongOption } from './../actions/search';
import s from './css/search-suggess.scss';

const SearchSuggess = ({suggess, onSongClick, onHideClick}) => {

    let suggessArtist;
    let suggessAlbum;
    let suggessVideo;
    let suggessSong;

    const artists = suggess.data[0].artist;
    const albums = suggess.data[1].album;
    const videos = suggess.data[2].video;
    const songs = suggess.data[3].song;

    const imageCdnUrl = 'http://image.mp3.zdn.vn/thumb/94_94/';

    let emptyResult = true;

    if(artists.length > 0){
        emptyResult = false;
        suggessArtist = <div>
            <h4 className={s.heading}>Tác giả</h4>
            {artists.map((artist) => {
                return <li className={s.item}>
                        <a href="#" className={s.link}>
                            <img src={imageCdnUrl + artist.thumb} />
                            <span className={s.content}>{artist.name}</span>
                        </a>
                    </li>;
            })}
        </div>;
    }
    if(albums.length > 0){
        emptyResult = false;
        suggessAlbum = <div>
            <h4 className={s.heading}>Album</h4>
            {albums.map((album) => {
                return <li className={s.item}>
                        <a className={s.link} >
                            <img src={imageCdnUrl + album.thumb} />
                            <span className={s.content}>
                                <span>{album.name}</span>
                                <span>{album.artist}</span>
                            </span>
                        </a>
                    </li>;
            })}
        </div>;
    }
    if(videos.length > 0){
        emptyResult = false;
        suggessVideo = <div>
            <h4 className={s.heading}>Video</h4>
            {videos.map((video) => {
                return <li className={s.item}>
                        <a href="#" className={s.link} >
                            <img src={imageCdnUrl + video.thumb} />
                            <span className={s.content}>
                                <span>
                                    {video.name}
                                </span>
                                <span>
                                    {video.artist}
                                </span>
                            </span>
                        </a>
                    </li>;
            })}
        </div>;
    }
    if(songs.length > 0){
        emptyResult = false;
        suggessSong = <div>
            <h4 className={s.heading}>Bài hát</h4>
            {songs.map((song) => {
                return <li className={s.item}>
                    <a href="#" className={s.link} onClick={()=>{onSongClick(song.id)}} >
                        <span className={s.content}>
                            <span>{song.name}</span>
                            <span>{song.artist}</span>
                        </span>
                    </a>
                </li>;
            })}
        </div>;
    }

    return (
        <div>
            {suggess.show && 
                <div className={s.root}>
                    <span className={s.hideLink} onClick={()=>{onHideClick()}}>Đóng</span>
                    <p>{suggess.message}</p>
                    {suggessSong}
                    {suggessAlbum}
                    {suggessArtist}
                    {suggessVideo}
                </div>
            }
        </div>
    );
}
export default withStyles(s)(SearchSuggess);
