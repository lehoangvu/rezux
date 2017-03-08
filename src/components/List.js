import React from 'react';
import UserItem from './UserItem';
const List = (state, onRemoveClick) => {
	console.log(state);

	const items = state.list.map((user) => <UserItem onClick={onRemoveClick} user={user} />);
	return (
		<ul>
			{items}
		</ul>
	);
};
export default List;
