import { loginWithGoogle, getUserData, setUserData } from './../actions/user';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const User = ({state, actions}) => {
    let uid = localStorage.getItem('uid');
    if(!uid){
        actions.loginWithGoogle();
    }
    return null;
}

const mapStateToProps = (state) => {
    return {
        state
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        loginWithGoogle,
        getUserData,
        setUserData
    }, dispatch)
});



const ContainerUser = connect(mapStateToProps, mapDispatchToProps)(User);
export default ContainerUser;
