import Player from './../components/Player';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        state: state.player
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        
    }, dispatch)
});

const ContainerPlayer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default ContainerPlayer;
    