import React from 'react';
import './App.css';
import TodoList from "./TodoList";

// data -> CRUD
// create
// read (++++)
// update
// delete

// CLI
// GUI----!!!!!
// VUI



function App() {
    // BLL:
    const todoListTitle = 'What to learn'
    const tasks = [
        {id: 1,title:'HTML&CSS' ,isDone: true},
        {id: 2,title:'JS/TS' ,isDone: true},
        {id: 3,title:'React' ,isDone: false}
    ]
    const todoListTitle2 = 'What to buy'
    const tasks_2 = [
        {id: 4,title:'Beer' ,isDone: true},
        {id: 5,title:'Cheese' ,isDone: true},
        {id: 6,title:'Fish' ,isDone: false}
    ]
    // GUI:
    return (
        <div className="App">
           <TodoList  tasks={tasks} title={todoListTitle} />
            <TodoList title={todoListTitle2} tasks={tasks_2} />
        </div>
    );
}

export default App;
