import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhotoExplorer from '../components/PhotoExplorer';
import { upload , getThumbnail} from '../actions/photo';

const mapStateToProps = (state) => ({
    photo: state.photo
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        upload,
        getThumbnail
    }, dispatch)
});

const ContainerPhoto = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoExplorer);

export default ContainerPhoto;
