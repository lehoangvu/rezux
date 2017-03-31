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
				ggToken: '',
				name: result.user.displayName,
				email: result.user.email,
				displayName: result.user.displayName
			};

			console.log('loged with fb: ', user);
			dispatch(commitUserData(user.uid, user));
			dispatch({
				type: 'LOGIN_FB_SUCCESS',
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
			let user = snap.val();
			dispatch({
				type: 'USERDATA_PARSED',
				user
			});
		})
	}
}

export const commitUserData = (uid, data) => {
	console.log("commit data: ", data, uid);
	return dispatch => {
		const db = firebase.database();
		db.ref('/users/' + uid).set(data).then(()=>{
			dispatch({
				type: 'USERDATA_COMMITED'
			});
		});
	}
}
