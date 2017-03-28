import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

class PlaylistCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...props.playlist,
            newPlaylistName: ''
        };
    }


    inputChange(e) {
        this.setState({
            ...this.state,
            newPlaylistName: e.target.value
        })
    }

    savePlaylist() {
        // const playListName;
        this.props.onCreateNew(this.state.newPlaylistName, this.state.callbackSongId);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps.playlist,
            newPlaylistName: ''
        });
    }

    render() {
        let playlists;
        if(this.state.data.length > 0){
            playlists = this.state.data.map((playlist, index) => {
                return (
                    <div key={index} className={s.item} onClick={()=>{this.props.addSongToPlaylist(this.state.callbackSongId, index)}}>
                        {playlist.name}
                        <em>{playlist.list.length}</em>
                    </div>
                );
            });
        }
        return (
            <div style={{display: this.state.showAddPopup ? 'block' : 'none'}}>
                <div className={s.root}>
                    <span className={s.hideLink} onClick={()=>{this.props.onHideClick()}}>
                        <i className="ion-android-close"></i>
                    </span>
                    <div className={s.container}>
                        <h3 className={s.heading}>Chọn từ danh sách Playlist</h3>
                        {playlists}
                        <div className={s.newForm}>
                            <span>Hoặc tạo mới</span>
                            <input className={s.input} onChange={this.inputChange.bind(this)} value={this.state.newPlaylistName} />
                            <button className={s.submit} disabled={this.state.newPlaylistName === ''} onClick={this.savePlaylist.bind(this)}>Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(s)(PlaylistCreator);
