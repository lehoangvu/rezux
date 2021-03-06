import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlaylistExplorer from '../components/PlaylistExplorer';
import { createNew, hidePopupAddToPlaylist, addSongToPlaylist, setCurentPlaylist } from '../actions/playlist';
import { fetchById, setPlayerId, clearError } from '../actions/player';

const mapStateToProps = (state) => ({
	playlist: state.playlist,
	player: state.player
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
    	addSongToPlaylist,
        createNew,
        onHideClick: hidePopupAddToPlaylist,
        setCurentPlaylist: setCurentPlaylist,
        fetchById: fetchById,
        setPlayerId: setPlayerId,
        clearError
    }, dispatch)
});

const ContainerPlaylist = connect(
	mapStateToProps,
	mapDispatchToProps
)(PlaylistExplorer);

export default ContainerPlaylist;
