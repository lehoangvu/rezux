import React from 'react';
import SearchSuggess from './SearchSuggess';
import SongOption from './SongOption';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/search.scss';

const Search = ({state, actions}) => {
    let keyword;

    const _onSubmit = () => {

    };

    const _onSongClick = (id) => {
        actions.showSongOption(id)
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
        actions.fetchById(id);
    };

    const _onFocus = () => {
        console.log('focus');
        actions.showSuggess();
    };

    const _onHideClick = () => {
        actions.hideSuggess();
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
                    placeholder="Nhập từ khóa"
                />
            </form>
            <SearchSuggess suggess={state.suggess} onHideClick={()=>_onHideClick()} onSongClick={(id)=>{_onSongClick(id)}} />
            <SongOption
                objectId={state.optionObjectId} 
                show={state.showSongOption} 
                onHideSongOption={_onHideSongOption} 
                showPopupAddToPlaylist={_showPopupAddToPlaylist} 
                onPlaySong={_onPlaySong}
                s={s}
             />
        </div>
    );
};

export default withStyles(s)(Search);
