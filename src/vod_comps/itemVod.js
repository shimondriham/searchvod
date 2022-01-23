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
        <div className=' col-md-3 p-3'>
        <div className="box card border shadow p-3" >
            <img src={item.Poster=="N/A"?"https://m.media-amazon.com/images/M/MV5BMTMyNzEyNjAzM15BMl5BanBnXkFtZTcwODY0ODQ0NQ@@._V1_SX300.jpg":item.Poster} className='card-img-top' />
             <h3>{item.Title}</h3>
            {/* |<Link  to="/info/:info">More info</Link> */}
            <button onClick={onBtnClick}  target="_blank" className='btn btn-info'>mor info</button>
          </div>
         </div>
    
    )
}

export default ItemVod