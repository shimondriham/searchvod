import React from 'react';
// import { arcontext } from '../context/arcontext';

function ItemVod(props){
    let item = props.item;
    return(
        <div className='p-3 col-md-4 '>
        <div className="border box shadow">
            <img src={item.Poster} className='float-end'/>
             <h2>{item.Title}</h2>
          
            <a href={item.pageURL} target="_blank" className='btn btn-info'>More info</a>
          </div>
        </div>
    
    )
}

export default ItemVod