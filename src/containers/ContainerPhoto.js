import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhotoExplorer from '../components/PhotoExplorer';

const mapStateToProps = (state) => ({
    state
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
    }, dispatch)
});

const ContainerPhoto = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoExplorer);

export default ContainerPhoto;
