import React from 'react';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/player.scss';
import {coloring} from './../helpers/colors';

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...this.props.state,
            duration: 0,
            player: {
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

    componentDidMount () {
        this.player = document.getElementById('player');
        this.load();
        this.play();
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

    toTime(s){
        return moment("2015-01-01").startOf('day')
            .seconds(s)
            .format('H:mm:ss');
    }

    componentWillReceiveProps (nextProps) {
        if(typeof nextProps.state.response.is_error !== 'undefined'){
            alert(nextProps.state.response.msg);
        }else{
            const newState = {
                ...nextProps.state,
                player: {
                    play: true,
                    currentTime: 0
                }
            };
            this.setState(newState);
            if(!newState.fetched){
                if(newState.player_id !== null){
                    this.fetch(newState.player_id);
                }
            }else{
                this.setState(newState);
                this.load();
                this.play();
            }
        }
    }

    getBestSource(source){
        // if(typeof source['lossless'] !== 'undefined') return source['lossless'];
        if(typeof source['320'] !== 'undefined') return source['320'];
        if(typeof source['128'] !== 'undefined') return source['128'];
        return '';
    }

    render() {
        const source = typeof this.state.source !== 'undefined' ? this.state.source : {
            'lossless': ''
        };
        const player = this.state.player;
        return (
            <div className={s.root} style={{backgroundColor: coloring(0)}}>
                <audio src={this.getBestSource(source) } autoPlay="true" id="player" onTimeUpdate={this.updateDuration.bind(this)}></audio>
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
