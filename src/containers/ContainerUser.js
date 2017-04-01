import { loginWithFacebook, loginWithGoogle, connectToDropbox, parseUserData, commitUserData } from './../actions/user';
import React from 'react';
import UserDashboard from './../components/UserDashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
    return {
        user:state.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        loginWithFacebook,
        loginWithGoogle,
        parseUserData,
        commitUserData,
        connectToDropbox
    }, dispatch)
});



const ContainerUser = connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
export default ContainerUser;
