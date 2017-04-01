import { 
    getSuggess, 
    showSuggess, 
    hideSuggess, 
    showSongOption, 
    hideSongOption, 
    showPopupAddToPlaylist, 
    hidePopupAddToPlaylist,
    addSongToPlaylist
} from './../actions/search';
import { setPlayerId } from '../actions/player';
import { createNew } from '../actions/playlist';
import Search from './../components/Search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        state: state.search,
        playlist: state.playlist
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        getSuggess, 
        hideSuggess,
        showSuggess,
        showSongOption,
        hideSongOption,
        showPopupAddToPlaylist,
        hidePopupAddToPlaylist,
        addSongToPlaylist,
        createPlaylist: createNew,
        // fetchById
        setPlayerId
    }, dispatch)
});

const ContainerSearch = connect(mapStateToProps, mapDispatchToProps)(Search);
export default ContainerSearch;
