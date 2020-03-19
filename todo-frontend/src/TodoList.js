import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
const APIURL = 'api/todos';

class TodoList extends Component {
	constructor() {
		super();
		this.state = {
			todos: []
		}
		this.addTodo = this.addTodo.bind(this);
	}
	
	componentWillMount() {
		this.loadTodos();
	}
	
	loadTodos() {
		fetch(APIURL)
		.then(resp => {
			if (!resp.ok) {
				if (resp.status >=400 && resp.status < 500) {
					return resp.json().then(data => {
						let err = {errorMessage: data.message};
						throw err;
					})
				} else {
					let err = {errorMessage: "Please try again later. The server is not responding."}
					throw err;
				}
			}
			return resp.json();
		})
		.then(todos => this.setState({todos}));
	}
	
	addTodo(val) {
		console.log(`Adding Todo From Form: ${val}`);
	}
	
	render() {
		const todoItems = this.state.todos.map(t => 
			<TodoItem
				key={t._id}
				{...t}
			/>									  
	  	)
		return (
			<div>
				<h1>Todo List</h1>
					<TodoForm addTodo={this.addTodo}/>
				<ul>
					{todoItems}
			   	</ul>
		   	</div>
		);
	}
}

export default TodoList;