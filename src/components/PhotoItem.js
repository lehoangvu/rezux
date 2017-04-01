import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './css/photo-item.scss';
 
class PhotoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            photo: props.photo,
            src: ''
        };
    }

    convertThumbnail(){
        if(this.state.photo.thumbnail){
            let _this = this;
            let reader = new FileReader();
            reader.onload = (e) => {
                _this.setState({
                    src: e.target.result
                });
            };
            reader.readAsDataURL(this.state.photo.thumbnail.fileBlob);
        }else{
            this.props.getThumbnail(this.state.photo, this.props._key);
        }
    }

    componentDidUpdate(){
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            ...this.state,
            photo:nextProps.photo
        })
        this.convertThumbnail();
    }

    componentDidMount(){
        this.convertThumbnail();
    }



    render(){
        const state = this.state;
        const image = <img className={state.src === '' ? s.skeleton : ''} src={state.src} />;
        return  <div className={s.root}>
                {image}
            </div>;
    }
}


export default withStyles(s)(PhotoItem);