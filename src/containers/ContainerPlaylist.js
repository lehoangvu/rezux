import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlaylistExplorer from '../components/PlaylistExplorer';
import { createNew, hidePopupAddToPlaylist, addSongToPlaylist } from '../actions/playlist';
import { fetchById, setPlayerId } from '../actions/player';

const mapStateToProps = (state, ownProps) => ({
	playlist: state.playlist,
	player: state.player,
	ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
    	addSongToPlaylist,
        createNew,
        onHideClick: hidePopupAddToPlaylist,
        fetchById: fetchById,
        setPlayerId: setPlayerId,
    }, dispatch)
});

const ContainerPlaylist = connect(
	mapStateToProps,
	mapDispatchToProps
)(PlaylistExplorer);

export default ContainerPlaylist;
