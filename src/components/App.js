import React from 'react';
import ContainerSearch from './../containers/ContainerSearch';
import ContainerUser from './../containers/ContainerUser';
import ContainerPlaylist from './../containers/ContainerPlaylist';
import ContainerPhoto from './../containers/ContainerPhoto';
import Player from './../components/Player';
import Tab from './../components/Tab';
import {coloring} from './../helpers/colors';

import s from './css/app.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


class App extends React.Component{
   constructor(props){
        super(props);
        this.state = {
          currentTab: 1
        }
   } 

   setCurrentTab(index){
    this.setState({
        currentTab: index
    })
   }

   render(){
        return (
            <div className={s.root}>
                <Tab
                    tabs={[<ContainerUser />, <ContainerPhoto/>, <ContainerPlaylist/>, <ContainerSearch/>]}
                    currentTab={this.state.currentTab}
                    setCurrentTab={(index)=>{this.setCurrentTab(index)}}
                 />
            </div>
        );
   }
}

export default withStyles(s)(App);
