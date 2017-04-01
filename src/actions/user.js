import firebase from './../store/FirebaseInstance';
import dx from './../store/dropbox';

const parseParram = (parramStr) => {
	let parrams = {};
	parramStr.split('&').map((item)=>{
		const itemArr = item.split('=');
		parrams[itemArr[0]] = itemArr[1];
	});
	return parrams;
}

export const connectToDropbox = () => {
	return dispatch => {
		let port = window.location.port !== '' ? ':' +window.location.port : '';
		let authUrl = dx.getAuthenticationUrl(window.location.protocol + '//' + window.location.hostname + port + '/auth');
		let form = window.open(authUrl, true);
		window.connectSuccess = (parramStr)=>{
			const parram = parseParram(parramStr);
			dispatch({
				type: 'CONNECT_DX_SUCCESS',
				accessToken: parram.access_token
			});
		};
	};
}

export const loginWithGoogle = () => {
	return dispatch => {
		let provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('profile');
		provider.addScope('email');
		firebase.auth().signInWithPopup(provider)
		.then((result) => {

			// The signed-in user info.
			let user = {
				uid: result.user.uid,
				ggToken: result.credential.accessToken,
				name: result.user.displayName,
				email: result.user.email,
				displayName: result.user.displayName,
			};

			dispatch({
				type: 'LOGIN_SOCIAL_SUCCESS',
				user
			});
		}).catch(function(error) {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log(errorCode, errorMessage);
			// ...
		});
	}
}
export const loginWithFacebook = () => {
	return dispatch => {
		let provider = new firebase.auth.FacebookAuthProvider();
		provider.addScope('email, user_photos');
		firebase.auth().signInWithPopup(provider)
		.then((result) => {
			// The signed-in user info.
			let user = {
				uid: result.user.uid,
				fbToken: result.credential.accessToken,
				name: result.user.displayName,
				email: result.user.email,
				displayName: result.user.displayName,
			};

			dispatch({
				type: 'LOGIN_SOCIAL_SUCCESS',
				user
			});
		}).catch(function(error) {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log(errorCode, errorMessage);
			// ...
		});
	}
}

export const parseUserData = (uid) => {
	console.log('parse uid: ', uid);
	return dispatch => {
		const db = firebase.database();
		db.ref('/users/' + uid).once('value').then((snap)=>{
			let userData = snap.val();
			dispatch({
				type: 'USERDATA_PARSED',
				userData
			});
		})
	}
}

export const commitUserData = (uid, data, path) => {
	console.log("commit data: ", data, uid);

	const db = firebase.database();
	db.ref('/users/' + uid + '/' + path).set(data).then((res)=>{
		console.log(res);
	}).catch(function(error) {
		// Handle Errors here.
		let errorCode = error.code;
		let errorMessage = error.message;
		console.log(errorCode, errorMessage);
		// ...
	});
}

export const appenUserData = (uid, data, path) => {
	console.log("commit data: ", data, uid);

	const db = firebase.database();
	db.ref('/users/' + uid + '/' + path).push(data).then((res)=>{
		console.log(res);
	}).catch(function(error) {
		// Handle Errors here.
		let errorCode = error.code;
		let errorMessage = error.message;
		console.log(errorCode, errorMessage);
		// ...
	});
}
