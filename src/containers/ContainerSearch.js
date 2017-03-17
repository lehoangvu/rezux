import { getSuggess, showSuggess, hideSuggess, showSongOption, hideSongOption } from './../actions/search';
import { showPopupAddToPlaylist, hidePopupAddToPlaylist } from '../actions/playlist';
import { setPlayerId } from '../actions/player';
import Search from './../components/Search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        state: state.search
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
        // fetchById
        setPlayerId
    }, dispatch)
});

const ContainerSearch = connect(mapStateToProps, mapDispatchToProps)(Search);
export default ContainerSearch;
