import jQuery from 'jquery';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import WithStylesContex from './global/WithStylesContex';

import firebase from './store/firebase';

window.jQuery = jQuery;
window.$ = jQuery;
const basePath = typeof _basePath !== 'undefined' ? _basePath : '/';
window.basePath = basePath;

render(
    <WithStylesContex onInsertCss={styles => Array.isArray(styles) ? styles.map((style)=>{style._insertCss()}): styles._insertCss()}>
        <Provider store={store}>
            <Router history={browserHistory}>
                {Routes}
            </Router>
        </Provider>
    </WithStylesContex>,
	document.getElementById('root')
);

// window.fbAsyncInit = function() {
// 	FB.init({
// 	  appId      : '580525262157720',
// 	  xfbml      : true,
// 	  version    : 'v2.8'
// 	});
// 	FB.AppEvents.logPageView();
// 	FB.login(function(response) {
// 	}, {scope: 'user_photos, public_profile'});
// };

// (function(d, s, id){
//  var js, fjs = d.getElementsByTagName(s)[0];
//  if (d.getElementById(id)) {return;}
//  js = d.createElement(s); js.id = id;
//  js.src = "//connect.facebook.net/en_US/sdk.js";
//  fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));


// $('#camera').on('change', (e)=>{
// 	var storageRef = firebase.storage().ref('image');
// 	// Create a reference to 'mountains.jpg'
// 	var mountainsRef = storageRef.child('mountains.jpg');
// 	// Create a reference to 'images/mountains.jpg'
// 	var mountainImagesRef = storageRef.child('images/mountains.jpg');
// 	// While the file names are the same, the references point to different files
// 	mountainsRef.name === mountainImagesRef.name            // true
// 	mountainsRef.fullPath === mountainImagesRef.fullPath    // false
// 	var file = $('#camera')[0].files[0];
// 	storageRef.put(file).then(function(snapshot) {
// 	  console.log(snapshot);
// 	});
// })