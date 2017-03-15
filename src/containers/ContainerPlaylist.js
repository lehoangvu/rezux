import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlaylistExplorer from '../components/PlaylistExplorer';
import { createNew, hidePopupAddToPlaylist, addSongToPlaylist } from '../actions/playlist';

const mapStateToProps = (state, ownProps) => ({
	state: state.playlist,
	player: state.player,
	ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
    	addSongToPlaylist,
        createNew,
        onHideClick: hidePopupAddToPlaylist
    }, dispatch)
});

const ContainerPlaylist = connect(
	mapStateToProps,
	mapDispatchToProps
)(PlaylistExplorer);

export default ContainerPlaylist;
