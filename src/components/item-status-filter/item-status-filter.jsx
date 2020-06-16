import React,{ Component } from 'react';
import SearchPanel from '../search-panel';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component
{
    state =
    {
        filterTypes:[
            {
                id:1,
                name:'All',
                active:true
            },
            {
                id:2,
                name:'Active',
                active:false
            },
            {
                id:3,
                name:'Done',
                active:false
            }
        ]
    }
    setFilter(type)
    {
        const {OnFilterItems} = this.props;
        const newArray = this.state.filterTypes.map(
            (el)=>
            {
                if(el.name === type)
                    return {...el,active:true}
                else
                    return {...el,active:false}
            }
        )
        this.setState({filterTypes:newArray});
        OnFilterItems(type);
    }
    render()
    {
        const {onSearchTask} = this.props;
        const {filterTypes} = this.state;
        
        const filters = filterTypes.map(
            (el)=>
            {
                let className  = 'filter-button ';
                className += (el.active)?'active ':'';

                return(
                    <button key={el.id} className={className} onClick={()=>this.setFilter(el.name)}>
                        {el.name}
                    </button>
                );
            }
        )
        return (
            <div className="item-status-filter">
                <SearchPanel onSearchTask={(name)=>{onSearchTask(name)}}/>
                {filters}
            </div>
        )
    };
}