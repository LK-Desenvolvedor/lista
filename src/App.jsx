import React, { useState } from 'react';
import TodoList from "./TodoList.jsx";
import './App.css';


function App() {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');

    const handleInputChange = (e) => {
        setTodoInput(e.target.value);
    };

    const handleAddTodo = () => {
        if (todoInput.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: todoInput, completed: false }]);
            setTodoInput('');
        }
    };

    const handleToggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }));
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        
        <div className="bodyPage">
            
            <div className="window">
            
                <div className="titleWindow">
                <h1>Marombeiro Raiz</h1>
            </div>
                
            <div className="bodyWindow">    
            <h2>Lista de Exercícios</h2>
            <input type="text" value={todoInput} onChange={handleInputChange} />
                
            <div className="seuBotao">    
            <button onClick={handleAddTodo}>Adicionar</button>
            <TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
            <button onClick={handleAddTodo}>Salvar Lista</button>
            </div>
                
                </div>
                </div>
        </div>
    );
}

export default App;
