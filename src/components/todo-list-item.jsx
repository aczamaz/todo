import React from 'react';

const TodoListItem = ({label,important})=>
{
    const spanStyle = 
    {
        color : important ? 'tomato':'black'
    };
    return (
        <span style={spanStyle}>
            {label}
        </span>
    );
};

export default TodoListItem;