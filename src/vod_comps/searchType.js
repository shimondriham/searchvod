import React ,{useContext, useEffect ,useRef}from 'react';
import { arcontext } from '../context/arcontext';
import {cearchcontext} from '../context/cearchcontext';
import axios from 'axios';
import ListVod from './listVod';
import { useNavigate, useParams } from 'react-router-dom';

function SearchType(props){
    
       let {ar,setAr}  = useContext(arcontext);
       let {searchHome,setSearchHome} = useContext(cearchcontext);
       let selectRef = useRef();
       let params = useParams();
       let nav = useNavigate()

       useEffect(() => {
        nav("/type/"+(selectRef.current.value?selectRef.current.value:"movie"));
        doApiType() ;
     }, [params.type])


const doApiType = async() => {
         let _searchQ;
         let _tipeQ;
         searchHome?_searchQ=searchHome:_searchQ="bank";
         _tipeQ=params.type;

         let url = `https://www.omdbapi.com/?s=${_searchQ}&tipe=${_tipeQ}&apikey=ab3bf0e7`
         try{
         let resp = await axios.get(url);
         console.log(resp.data.Search);
         setAr(resp.data.Search);
         }
         catch(err){
           alert("There problem, come back later");
           nav("/type/movie")
           window.location.reload();
         }
       }

   const selectType = () => {
        nav("/type/"+selectRef.current.value);
      }

    return(

        <div className="container">
          <div className="row p-2">
         <div className="col-md-6 ">
            <select onChange={selectType} ref={selectRef} className='form-control select2'>        
                <option value="">chouse type</option>
                <option value="movie">movie</option>
                <option value="series">series</option>
                <option value="episode">episode</option>
            </select>
          </div>
      </div> 
          <ListVod/>
             
        </div> 
    )
}

export default SearchType;