import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import MorInfo from './morInfo';
import { Link} from 'react-router-dom';
// import { arcontext } from '../context/arcontext';

function ItemVod(props){
    let item = props.item;
    let nav = useNavigate();
 
    const onBtnClick = () => { 
        nav("/info/"+item.imdbID);
    }


    return(
        <div className='p-3 col-md-4 '>
        <div className="border box shadow">
            <img src={item.Poster} className='float-end'/>
             <h2>{item.Title}</h2>
            {/* |<Link  to="/info/:info">More info</Link> */}
            <button onClick={onBtnClick}  target="_blank" className='btn btn-info'>mor info</button>
          </div>
        </div>
    
    )
}

export default ItemVod