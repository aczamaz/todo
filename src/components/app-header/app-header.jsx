import React from 'react';
import './app-header.css';

const AppHeader = ({notDone, done})=>
{
    const result = ` Задач осталось ${notDone}, выполненно ${done}`;

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