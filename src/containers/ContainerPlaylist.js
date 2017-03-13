import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Playlist from '../components/Playlist';
import { createNew, hidePopupAddToPlaylist } from '../actions/playlist';

const mapStateToProps = (state) => ({
	state: state.playlist
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        createNew,
        onHideClick: hidePopupAddToPlaylist
    }, dispatch)
});

const ContainerPlaylist = connect(
	mapStateToProps,
	mapDispatchToProps
)(Playlist);

export default ContainerPlaylist;
