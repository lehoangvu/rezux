import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlaylistExplorer from '../components/PlaylistExplorer';
import { createNew, hidePopupAddToPlaylist, addSongToPlaylist } from '../actions/playlist';

const mapStateToProps = (state) => ({
	state: state.playlist
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
