import React from 'react';
import SearchPanel from './search-panel';

import './item-status-filter.css';

const ItemStatusFilter = () => 
{
    return (
        <div>
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

export default ItemStatusFilter;