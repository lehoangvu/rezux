import React from 'react';
import ContainerSearch from './../containers/ContainerSearch';
import ContainerUser from './../containers/ContainerUser';
import Player from './../components/Player';
import {coloring} from './../helpers/colors';

import s from './css/app.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class App extends React.Component{
   constructor(props){
        super(props);
   } 

   render(){
        return (
            <div className={s.root}>
                <ContainerUser />
                <ContainerSearch />
                {this.props.children}
            </div>
        );
   }
}

export default withStyles(s)(App);
