const reducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD':
			const list =  Object.assign([], state.list);
			list.push({
				username: action.username,
				email: action.email,
				id: action.id
			});
			return {
				list: list
			};
			break;
		case 'REMOVE':
			let index = -1;
			state.list.map((user, _index) => {
				if(user.id === action.id){
					index = _index;
				}
			});
			if(index !== -1){
				state.list.splice(index, 1);
			}
			return {
				list: state.list
			}
		default:
			return state;
	}
};

export default reducer;
