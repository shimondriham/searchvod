import React,{useEffect,useState} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

function MorInfo(props){
    let [arInfo, setArInfo] = useState([]);
    let params = useParams();

    useEffect(() => { 
        doApi() ;
     }, [params.search])

     const doApi = async() => {
        let _id;
       let _id2 = params.id; 
       _id2? _id=_id2:_id="tt8342862";
       console.log(_id)
          let url = `http://www.omdbapi.com/?i=${_id}&apikey=ab3bf0e7`
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
      
       }

    return(
     <div className='container'>        
        <div className=' p-3'>
          <img src={arInfo.Poster} className='float-end'/>
           <h2>name: {arInfo.Title}</h2>           
           <h4>info: {arInfo.Plot}</h4>
           <h3>Actors: {arInfo.Actors}</h3>
           <button className='btn btn-info'><Link to="/"> back </Link></button>
          
         </div>
      </div>
    )
}

export default MorInfo