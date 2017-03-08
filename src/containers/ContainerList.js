import { connect } from 'react-redux';
import List from '../components/List';
import { remove } from '../actions';

const mapStateToProps = (state) => ({
	list: state.list
});

const mapDispatchToProps = {
	onRemoveClick: remove
};

const ContainerList = connect(
	mapStateToProps,
	mapDispatchToProps
)(List);

export default ContainerList;
