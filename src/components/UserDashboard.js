import React from 'react';

import u from './css/user-dashboard.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class UserDashboard extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let uid = localStorage.getItem('uid');
        if(uid){
            this.props.actions.parseUserData(uid);
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    getUserLoginBlock(){
        const user = this.props.user;
        if(!user.uid){
            return <div className={u.loginMethod}>
                <h3 className={u.blockHeading}>Chọn cách đăng nhập</h3>
                <div onClick={()=>{this.props.actions.loginWithFacebook()}} className={u.btn + ' ' + u.btnFb}><i className="ion-social-facebook" />Facebook</div>
                <div onClick={()=>{this.props.actions.loginWithGoogle()}} className={u.btn + ' ' + u.btnGg}><i className="ion-social-google" />Google</div>
            </div>
        }else{
            return <div className={u.userInfo}>
                <h3 className={u.blockHeading}>{user.displayName}</h3>
            </div>
        }
    }
    getUserDropboxStatusBlock(){
        const user = this.props.user;
        if(user.dxToken === ''){
            return <div className={u.dropboxStatus}>
                <h3 className={u.blockHeading}>Kết nối với Dropbox</h3>
                <div className={u.btn + ' ' + u.btnDx} onClick={()=>{ this.props.actions.connectToDropbox() }}><i className="ion-social-dropbox" />Dropbox</div>
            </div>
        }else{
            return <div className={u.dropboxStatusSuccess}>
                <i className="ion-social-dropbox" />Đã kết nối
            </div>
        }
    }
    render(){
        return <div className={u.root}>
            {this.getUserLoginBlock()}
            <span className={u.breakLine}/>
            {this.getUserDropboxStatusBlock()}
            <span className={u.breakLine}/>
        </div>;
    }
}

export default withStyles(u)(UserDashboard);
