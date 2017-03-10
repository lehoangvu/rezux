import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/player.scss';

// const Player = ({state, action}) => {
//     const componentDidMount = () => {
//         console.log('OK');
//     }
//     return (
//         <div className={s.root}>
//             <video controls="true" autoPlay="true" name="media">
//                 <source  
//                     src={state.source["128"]}
//                     type="audio/mpeg" >
//                 </source>
//             </video>
//         </div>
//     );
// };


class Player extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount () {
        
    }
    componentDidUpdate (prevState, nextState) {
        let player = document.getElementById('player');
        player.load();
        player.play();
    }
    render() {
        const state = this.props.state;
        return (
            <div className={s.root}>
                <video id="player" controls="true" autoPlay="true" name="media">
                    <source  
                        src={state.source["128"]}
                        type="audio/mpeg" >
                    </source>
                </video>
            </div>
        );
    }
}

export default withStyles(s)(Player);
