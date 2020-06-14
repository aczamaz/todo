import React,{Component} from 'react';
import './add-item.css';

export default class AddItem extends Component
{
    state = { label:''};
    addTask = (e)=>
    {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState(
            {
                label:''
            }
        );

    }
    setLabel = (e)=>
    {
        this.setState(
            {
                label:e.target.value
            }
        );
    }
    render()
    {
        return(
            <form className="add-text" onSubmit={this.addTask}>
                <input
                    type="text"
                    className="add-item__input"
                    onChange={this.setLabel}
                    value={this.state.label}/>
                <button
                    className="add-item__button"
                >
                    Добавить
                </button>
            </form>
        );
    }
}