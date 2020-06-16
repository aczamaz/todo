import React,{Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component
{
    setValue = (e) =>
    {
        const { onSearchTask } = this.props;
        onSearchTask(e.target.value);
        
    }
    render(){
        return (
            <input
                onChange={this.setValue}
                placeholder="search"
                className="search-input"
            />
        );
    }
}