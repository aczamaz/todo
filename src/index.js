import React , { Component } from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import AppHeader from './components/app-header';
import './index.css';
import AddItem from './components/add-item';

class App extends Component {
    id = 0;
    state =
    {
        todoData :
        [
            this.createItem('Drink Coffe'),
            this.createItem('Make Awsome App'),
            this.createItem('Have a luch')
        ]
    }

    createItem(label)
    {
        return{
            id:this.id++,
            label:label,
            important:false,
            done:false
        }
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
    toggleItem(arr,id,property)
    {
        
        const idX = arr.findIndex((el)=>el.id === id)
        const oldItem = arr[idX];
        const newItem = {...oldItem,[property]:!oldItem[property]};
        const newArray = [
            ...arr.slice(0,idX),
            newItem,
            ...arr.slice(idX+1)
        ];
        return newArray;
    }
    addItem()
    {
        this.setState(
            ({todoData})=>
            {
                const newItem = this.createItem('new Item')

                const newArray = [...todoData,newItem];

                return {todoData:newArray};
            }
        )
    }
    doneTask(id)
    {
        this.setState(
            ({todoData})=>{
                return {todoData:this.toggleItem(todoData,id,'done')}
            }
        )
    }
    importantTask(id)
    {
        this.setState(
            ({todoData})=>{
                return {todoData:this.toggleItem(todoData,id,'important')}
            }
        )
    }
    render()
    {
        const todoData = this.state.todoData;
        const doneTaskCount = todoData.filter((el)=>el.done).length;
        const notDoneTaskCount = todoData.length - doneTaskCount;
        return (
            <div className="todo-wraper">
                <AppHeader done={doneTaskCount} notDone={notDoneTaskCount}/>
                <ItemStatusFilter/>
                <TodoList
                    todos={this.state.todoData} 
                    onDeleted={(id)=>{this.deleteItem(id)}}
                    onDoneTask={(id)=>{this.doneTask(id)}}
                    onImportantTask={(id)=>{this.importantTask(id)}}
                />
                <AddItem onAddItem={()=>this.addItem()}/>
            </div>
        );
    }
};


ReactDom.render(<App/>,document.getElementById('root'))