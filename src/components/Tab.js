import React from 'react';
import t from './css/tab.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Tab extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const props = this.props;
        const tabs = props.tabs.map((tabComponent, index)=>{
            if(tabComponent!==null){
                return <div className={props.currentTab === (index + 1) ? t.tabActive: t.tab}>
                    {tabComponent}
                </div>;
            }
        })
        return (
            <div className={t.root}>
                <div className={t.tabList} >
                    <div className={props.currentTab === 1 ? t.itemActive: t.item} onClick={()=>{props.setCurrentTab(1)}}><span className="ion-ios-personadd"/></div>
                    <div className={props.currentTab === 2 ? t.itemActive: t.item} onClick={()=>{props.setCurrentTab(2)}}><span className="ion-images"/></div>
                    <div className={props.currentTab === 3 ? t.itemActive: t.item} onClick={()=>{props.setCurrentTab(3)}}><span className="ion-music-note"/></div>
                    <div className={props.currentTab === 4 ? t.itemActive: t.item} onClick={()=>{props.setCurrentTab(4)}}><span className="ion-ios-search-strong"/></div>
                </div>
                <div className={t.tabContent} >
                    {tabs}
                </div>
            </div>);
    }
}

export default withStyles(t)(Tab);