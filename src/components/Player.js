import React from 'react';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/player.scss';
import {coloring} from './../helpers/colors';
import {browserHistory} from 'react-router';
class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...props.state,
            duration: 0,
            player: {
                disabled: true,
                play: false,
                currentTime: 0
            }
        };
        this.timeout = null;
        this.slide = false;
    }

    fetch(id){
        this.props.fetch(id);
    }

    componentDidUpdate () {
        this.setTitle();
    }

    getError(){
        let _this = this;
        let errorDiv;
        if(typeof this.props.state.response.is_error !== 'undefined'){
            errorDiv = <div className={s.error}>Có lỗi sảy ra, vui lòng thử lại bài khác</div>;
            setTimeout(()=>{
                _this.next();
            }, 4000);
        }
        return errorDiv;
    }

    setTitle(){
        const state = this.state;
        if(typeof state.title !== 'undefined'){
            document.title = state.title;
        }
    }

    componentDidMount () {
        if(this.state.player_id !== null && !this.state.fetched){
            this.fetch(this.state.player_id);
        }
        this.player = document.getElementById('player');
        this.load();
        this.play();
    }

    componentWillReceiveProps (nextProps) {
        const newState = {
            ...this.state,
            ...nextProps.state,
        };

        if(newState.fetched){
            if(!this.state.player.play){
                newState.player.play = true;
                this.play();
            }
            newState.player.disabled = false;
        }
    
        this.setState(newState);
    }

    _onPlayToggleClick(e){
        let state = this.state;
        state.player.play = !state.player.play;
        state.player.play ? this.play() : this.stop();
        this.setState(state);
    }

    _onPlayerToggle(e){
        let state = this.state;
        state.player.play = !state.player.play;
        this.setState(state);
    }

    updateDuration(e){
        if(!this.slide){
            let state = this.state;
            state.player.currentTime = this.player.currentTime;
            this.setState(state);
        }
    }

    sliderChange(e){
        this.slide = true;
        this.setState({
            player: {
                ...this.state.player,
                currentTime: e.target.value
            }
        });

        let _this = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(()=>{
            _this.slide = false;
            _this.play();
        }, 300);
    }

    stop(){
        this.player.pause();
    }

    play(){
        this.player.currentTime = this.state.player.currentTime;
        this.player.play();
    }
    
    load(){
        this.player.pause();
        this.player.load();
    }

    next(){
        const nextSongId = this.getNextSongId();
        const rolloutId = this.state.rolloutId;
        if(nextSongId){
            browserHistory.push(`/${rolloutId}/${nextSongId}`);
        }
    }

    getNextSongId(){
        const rolloutPlaylist = this.state.rolloutPlaylist;
        const player_id = this.state.player_id;
        if(rolloutPlaylist){
            let nextId = false;
            rolloutPlaylist.list.map((song, index)=>{
                if(song.id === player_id){
                    if(rolloutPlaylist.list.length - 1 <= index){
                        nextId = rolloutPlaylist.list[0].id;
                    }else{
                        nextId = rolloutPlaylist.list[index + 1].id;
                    }
                }
            });
            return nextId;
        }
        return false;
    }

    toTime(s){
        return moment("1993-09-18").startOf('day')
            .seconds(s)
            .format('H:mm:ss');
    }

    getBestSource(source){
        // if(typeof source['lossless'] !== 'undefined') return source['lossless'];
        if(typeof source['320'] !== 'undefined') return source['320'];
        if(typeof source['128'] !== 'undefined') return source['128'];
        return '';
    }

    render() {
        const imageCdnUrl = 'http://image.mp3.zdn.vn/thumb/165_165/';
        const source = typeof this.state.source !== 'undefined' ? this.state.source : {
            'lossless': ''
        };
        const image = this.state.album_cover !== '' ? imageCdnUrl + this.state.album_cover : imageCdnUrl + this.state.thumbnail;
        const player = this.state.player;
        let errorDiv = this.getError();
        let disabledCover = player.disabled ? <div className={s.cover}></div> : '';

        return (
            <div className={s.root} style={{backgroundImage: "url("+image+")", filter: player.disabled ? 'grayscale(100%)' : 'none'}}>
                <audio src={this.getBestSource(source) } autoPlay="true" id="player" 
                onEnded={this.next.bind(this)}
                onTimeUpdate={this.updateDuration.bind(this)}></audio>
                {errorDiv}
                {disabledCover}
                <div className={s.control} >
                    <button className={s.playBtn} onClick={this._onPlayToggleClick.bind(this)}>
                        <span className={player.play ? 'ion-ios-pause' : 'ion-ios-play'} />
                    </button>
                    <div className={s.durationWrap}>
                        <input type="range" min="0" max={this.state.duration} onChange={this.sliderChange.bind(this)} value={player.currentTime} />
                        <span className={s.duration}>{this.toTime(player.currentTime)}</span>
                        <span className={s.totalDuration}>{this.toTime(this.state.duration)}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(s)(Player);
