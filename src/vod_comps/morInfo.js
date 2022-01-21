
import React,{useEffect,useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

    return(
     <div className='container'>
           <h2>name: {arInfo.Title}</h2>
          <h3>info: {arInfo.Plot}</h3>
     </div>
    )
}

export default MorInfo