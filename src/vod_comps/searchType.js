import React ,{useContext, useEffect ,useRef}from 'react';
import { arcontext } from '../context/arcontext';
import {cearchcontext} from '../context/cearchcontext';
import axios from 'axios';
import ListVod from './listVod';

function SearchType(props){
    
       let {ar,setAr}  = useContext(arcontext);
       let {searchHome,setSearchHome} = useContext(cearchcontext);
       let selectRef = useRef();

const doApiType = async(_tipeQ,_searchQ) => {
         let url = `http://www.omdbapi.com/?s=${_searchQ}&tipe=${_tipeQ}&apikey=ab3bf0e7`
         try{
         let resp = await axios.get(url);
         console.log(resp.data.Search);
         setAr(resp.data.Search);
         }
         catch(err){
           alert("There problem, come back later");
         }
       }

   const selectType = () => {
        console.log(selectRef.current.value);
        doApiType(selectRef.current.value,(searchHome)?searchHome:"bank");
      }

    return(

        <div className="container">
         <div className="col-md-6 ">
            <select onChange={selectType} ref={selectRef} className='form-control select2'>        
                <option value="">chouse type</option>
                <option value="movie">movie</option>
                <option value="series">series</option>
                <option value="episode">episode</option>
            </select>
          </div>
          <ListVod/>
        </div> 
    )
}

export default SearchType;