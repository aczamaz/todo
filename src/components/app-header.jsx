import React from 'react';
import './app-header.css';

const AppHeader = ({count = 3, done = 2})=>
{
    const result = ` Задач ${count}, выполненно ${done}`;

    return (
        <div className="app-header">
            <h1>My Todo List</h1>
            <span className="result">
                {result}
            </span>
        </div>
    );
}

export default AppHeader;