import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({todos,onDeleted,onDoneTask,onImportantTask})=>
{
    const todoList = todos.map((item)=>
    {
        const {id,hideSeacrh,hideType,...itemProps} = item;

        let classNameWr = "list-group-item ";
        classNameWr += (hideSeacrh)?"search-hide ":"";
        classNameWr += (hideType)?"type-hide ":"";

        return (
        <li key={id} className={classNameWr}>
            <TodoListItem {...itemProps}
                onDeleted = {()=>{onDeleted(id);}}
                onDoneTask={()=>{onDoneTask(id);}}
                onImportantTask={()=>{onImportantTask(id);}}
            />
        </li>)
    });
    
    return(
        <ul className="list-group todo-list">
            {todoList}
        </ul>
    );
};

export default TodoList;