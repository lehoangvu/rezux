import React from 'react';
import SearchSuggess from './SearchSuggess';
import SongOption from './SongOption';
import PlaylistCreator from './PlaylistCreator';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/search.scss';

const Search = ({state, playlist, actions}) => {
    let keyword;


    const _onSubmit = () => {

    };

    const _onSongClick = (object) => {
        actions.showSongOption(object)
    };

    const _onHideSongOption = () => {
        actions.hideSongOption()
    };

    const _showPopupAddToPlaylist = (id) => {
        actions.showPopupAddToPlaylist(id)
    };

    const _onChange = () => {
        actions.getSuggess(keyword.value);
    };

    const _onPlaySong = (id) => {
        // actions.fetchById(id);
        actions.setPlayerId(id);
    };

    const _onFocus = () => {
        console.log('focus');
        actions.showSuggess();
    };

    const _onHideClick = () => {
        actions.hideSuggess();
    };


    const _onCreateNew = (playlistName, callbackSongId) => {
        actions.createNew(playlistName, callbackSongId);
    };

    return (
        <div className={s.root}>
            <form className={s.form} onSubmit={_onSubmit}>
                <input
                    className={s.input}
                    onChange={_onChange}
                    onFocus={_onFocus}
                    // onBlur={_onBlur}
                    ref={ node => {
                        keyword = node;
                    }}
                    type="text"
                    placeholder="Tìm bài hát, ca sĩ..."
                />
            </form>
            <SearchSuggess suggess={state.suggess} onHideClick={()=>_onHideClick()} onSongClick={(id)=>{_onSongClick(id)}} />
            <SongOption
                object={state.object} 
                show={state.showSongOption} 
                onHideSongOption={_onHideSongOption} 
                showPopupAddToPlaylist={_showPopupAddToPlaylist} 
                onPlaySong={_onPlaySong}
                s={s}
             />
            <PlaylistCreator playlist={playlist} onCreateNew={actions.createPlaylist} onHideClick={actions.hidePopupAddToPlaylist} addSongToPlaylist={actions.addSongToPlaylist} />
        </div>
    );
};

export default withStyles(s)(Search);
