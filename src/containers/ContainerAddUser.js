import React from 'react';
import { connect } from 'react-redux';
import { add } from '../actions';

const AddForm = ( {dispatch} ) => {
	let email;
	let name;
	const submit = (e) => {
		e.preventDefault();
		const useremail = email.value;
		const username = name.value;
		dispatch(add({
			username: username,
			email: useremail
		}));

	};
	return (
		<div>
			<form onSubmit={submit}>
				<input
					ref={node => {
						name = node;
					}}
					type="text"
					placeholder="Name"
				/>
				<br />
				<input
					ref={node => {
						email = node;
					}}
					type="text"
					placeholder="Email"
				/>
				<br />
				<button type="submit" >Add</button>
			</form>
		</div>
	);
};
const ContainerAddUser = connect()(AddForm);

export default ContainerAddUser;
