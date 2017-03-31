import React from 'react';
import {Link} from 'react-router';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/photoexplorer.scss';


class PhotoExplorer extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidUpdate(){
        this.setTitle();
    }

    componentDidMount(){
        this.parseProps(this.props);
    }

    componentWillReceiveProps (nextProps) {
    }

    render(){


        return (
            <div>
                Photo explorer
            </div>
        );

    }
}

export default withStyles(s)(PhotoExplorer);
