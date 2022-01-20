import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import { arcontext } from '../context/arcontext';

function ItemVod(props){
    let item = props.item;
    let params = useParams();
    let nav = useNavigate();


    const doApi = async() => {
        let morInfoQ = params.search.imdbID;
        // console.log(morInfoQ)
        let url = `https://www.omdbapi.com/?i=${morInfoQ}&apikey=ab3bf0e7`
        let resp = await axios.get(url);
        console.log(resp.data);
        // setAr(resp.data.hits);
      }
    
    const onBtnClick = () => { 
        alert(props.item.imdbID);
        nav("")
        doApi();

    }


    return(
        <div className='p-3 col-md-4 '>
        <div className="border box shadow">
            <img src={item.Poster} className='float-end'/>
             <h2>{item.Title}</h2>
          
            <button onClick={onBtnClick} href={item.pageURL} target="_blank" className='btn btn-info'>More info</button>
          </div>
        </div>
    
    )
}

export default ItemVod