import { connect } from 'react-redux';
import Playlist from '../components/Playlist';
import { remove } from '../actions';

const mapStateToProps = (state) => ({
	state: state.playlist
});

const mapDispatchToProps = {
};

const ContainerPlaylist = connect(
	mapStateToProps,
	mapDispatchToProps
)(Playlist);

export default ContainerPlaylist;
