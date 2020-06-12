import React,{ Component } from 'react';
import SearchPanel from '../search-panel';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component
{
    render()
    {
        return (
            <div className="item-status-filter">
                <SearchPanel/>
                <button className="filter-button active">
                    All
                </button>
                <button className="filter-button">
                    Active
                </button>
                <button className="filter-button">
                    Done
                </button>
            </div>
        )
    };
}