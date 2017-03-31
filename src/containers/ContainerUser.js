import { loginWithFacebook, parseUserData, commitUserData } from './../actions/user';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export class User extends React.Component {
    constructor(props){
        super(props);
        console.log(1);
        let uid = localStorage.getItem('uid');
        if(!uid){
            props.actions.loginWithFacebook();
        }else{
            props.actions.parseUserData(uid);
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

    render(){
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        loginWithFacebook,
        parseUserData,
        commitUserData
    }, dispatch)
});



const ContainerUser = connect(mapStateToProps, mapDispatchToProps)(User);
export default ContainerUser;
