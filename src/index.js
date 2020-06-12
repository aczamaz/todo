import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import AppHeader from './components/app-header';
import './index.css';

const App = ()=>{
    const TodoData = 
    [
        {
            id:1,
            label:'Drink Coffe',
            important:false
        },
        {
            id:2,
            label:'Make Awsome App',
            important:true
        },
        {
            id:3,
            label:'Have a luch',
            important:false
        },
    ];

    return (
        <div className="todo-wraper">
            <AppHeader/>
            <ItemStatusFilter/>
            <TodoList todos={TodoData} />
        </div>
    );
};


ReactDom.render(<App/>,document.getElementById('root'))