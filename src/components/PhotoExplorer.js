import React from 'react';
import {Link} from 'react-router';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PhotoItem from './PhotoItem';
import s from './css/photoexplorer.scss';


class PhotoExplorer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputKey: 'inputFile_1'
        }
    }
    componentDidUpdate(){
    }

    componentDidMount(){
    }

    componentWillReceiveProps (nextProps) {

    }

    submit(e){
        e.preventDefault();
    }

    cameraChange(e){
        const file = e.target.files[0];
        this.props.actions.upload(file);
        // $(e.currentTarget).val('');
        this.setState({
            inputKey: this.state.inputKey + '1'
        })
    }

    render(){
        const photo = this.props.photo;
        const photoHtml = Object.keys(photo.albums[0].list).map((key)=>{
            return <PhotoItem getThumbnail={this.props.actions.getThumbnail} _key={key} key={key} photo={photo.albums[0].list[key]} />;
        })
        return (
            <div className={s.root}>
                    <div className={s.photoList}>
                        {photoHtml}
                    </div>
                    <label for="capture" className={s.captureBtn}>
                        <input key={this.state.inputKey} type="file" accept="image/*" id="capture" capture="camera" onChange={this.cameraChange.bind(this)} />
                        <i className="ion-ios-camera" />
                    </label>
            </div>
        );

    }
}

export default withStyles(s)(PhotoExplorer);
