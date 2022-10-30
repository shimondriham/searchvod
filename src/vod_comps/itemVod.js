import React from 'react';
import { useNavigate} from 'react-router-dom';

function ItemVod(props){
    let item = props.item;
    let nav = useNavigate();


    const onBtnClick = () => { 
        nav("/info/"+item.imdbID);
    }

    return(
        <div className=' col-md-4 col-lg-3  p-3 '>
        <div className="box2 card border shadow p-3 ">
            <img  src={item.Poster=="N/A"?"https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80":item.Poster} className='card-img-top'  />
            <h5>{item.Poster=="N/A" ? item.Title : "" }</h5>
            <button onClick={onBtnClick}  target="_blank" className='btn btn-outline-dark mt-2'>more info</button>
          </div>
         </div>
    
    )
}

export default ItemVod
