import React,{Component} from 'react';
import './add-item.css';

export default class AddItem extends Component
{
    render()
    {
        const { onAddItem } = this.props;
        return(
            <div className="add-text">
                <input
                    type="text"
                    className="add-item__input"/>
                <button
                    className="add-item__button"
                    onClick={onAddItem}
                >
                    Добавить
                </button>
            </div>
        );
    }
}