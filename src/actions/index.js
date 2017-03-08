let uid = 3;

export const add = (user) => ({
	...user,
	type: 'ADD',
	id: uid++
})

export const remove = (id) => ({
	id,
	type: 'REMOVE'
})
