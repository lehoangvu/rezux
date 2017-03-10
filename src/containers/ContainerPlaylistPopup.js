import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Playlist from '../components/Playlist';
import { showPopupAddToPlaylist, hidePopupAddToPlaylist } from '../actions/playlist';

const mapStateToProps = (state) => ({
	state: state.playlist
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        showPopupAddToPlaylist,
        hidePopupAddToPlaylist        
    }, dispatch)
});

const PlaylistPopup = ({state, actions}) => {
    console.log(actions);
    let playlists;
    if(state.data.length > 0){
        playlists = state.data.map((playlist) => {
            return (
                <div>
                    <h4>{playlist.name}</h4>
                </div>
            );
        });
    }

    return (
        <div>
            {state.showAddPopup && <div>
                    <h3>Danh sách Playlist</h3>
                    {playlists}
                </div>}
        </div>
    );
}

const ContainerPlaylistPopup = connect(
	mapStateToProps,
	mapDispatchToProps
)(PlaylistPopup);

export default ContainerPlaylistPopup;
