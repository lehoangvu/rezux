import firebase from './../store/firebase';

export const loginWithGoogle = () => {
	return dispatch => {
		let provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('profile');
		provider.addScope('email');
		firebase.auth().signInWithPopup(provider)
		.then((result) => {
			// The signed-in user info.
			let user = result.user;
			localStorage.setItem('uid', user.uid);
			// dispatch({
			// 	type: 'LOGIN_GG_SUCCESS',
			// 	uid: user.uid
			// });
		}).catch(function(error) {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log(errorCode, errorMessage);
			// ...
		});
	}
}

export const getUserData = (uid) => {
	return dispatch => {
		const db = firebase.database();
		db.ref('/users/' + uid).once('value').then((playlists)=>{
			console.log(playlists);
		})
	}
}

export const setUserData = (uid, data) => {
	return dispatch => {
		const db = firebase.database();
		db.ref('/users/' + uid).set(data);
	}
}
