import React from 'react';
import ContainerList from './../containers/ContainerList';
import ContainerAddUser from './../containers/ContainerAddUser';
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div>
		<ContainerList />
		<ContainerAddUser />
	</div>
);

export default App;
