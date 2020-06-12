import React , { Component } from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import AppHeader from './components/app-header';
import './index.css';

class App extends Component {
    state =
    {
        todoData :
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
        ]
    }
    deleteItem(id)
    {
        this.setState(
            ({todoData})=>
            {
                const idX = todoData.findIndex((el)=>el.id === id)
                const newArray = [
                    ...todoData.slice(0,idX),
                    ...todoData.slice(idX+1)
                ];
                return { todoData:newArray};
            }
        )
    }
    render()
    {
        return (
            <div className="todo-wraper">
                <AppHeader/>
                <ItemStatusFilter/>
                <TodoList
                    todos={this.state.todoData} 
                    onDeleted={(id)=>{this.deleteItem(id)}}
                />
            </div>
        );
    }
};


ReactDom.render(<App/>,document.getElementById('root'))