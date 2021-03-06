
import React,{useEffect,useState} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

function MoreInfo(props){
    let [arInfo, setArInfo] = useState([]);
    let params = useParams();
    let nav = useNavigate();

    useEffect(() => { 
        doApi() ;
     }, [])

     const doApi = async() => {
      let _id;
       let _id2 = params.id; 
       _id2? _id=_id2:_id="tt8342862";
       console.log(_id)
          let url = `https://www.omdbapi.com/?i=${_id}&apikey=ab3bf0e7`
          try{
          let resp = await axios.get(url);
          console.log(resp.data);
          setArInfo(resp.data);
          }
          catch(err){
            alert("There problem, come back later")
          }
        }
      const onBtnClick= () => { 
        nav(-1);
       }

    return(
     <div className='container'>        
       
          <div className='card border shadow my-2'>
            <div className='p-3 d-block d-md-flex'>
          <div className=''>
          <img src={arInfo.Poster=="N/A"?"https://images.unsplash.com/photo-1601027847350-0285867c31f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80":arInfo.Poster} className=''/>
          </div>
          <div className='mx-4'>
          <h2 >name: {arInfo.Title}</h2>           
           <h4>info: {arInfo.Plot}</h4>
           <h3>Actors: {arInfo.Actors}</h3>
           <h4><i class="fa fa-star-o" aria-hidden="true"></i> {arInfo.imdbRating} <spen className="">/ 10</spen> </h4>
           <button onClick={onBtnClick} className='btn btn-outline-dark'>back</button>   
          </div>   
         </div>
      </div>
      </div>
    )
}

export default MoreInfo