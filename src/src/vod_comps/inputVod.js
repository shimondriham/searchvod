import React ,{useContext, useEffect ,useRef}from 'react';
import { arcontext } from '../context/arcontext';
import {cearchcontext} from '../context/cearchcontext';
import { yearcontext } from '../context/yearcontext';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ListVod from './listVod';

function InputVod(props){
    let {ar,setAr}  = useContext(arcontext)
    let {searchHome,setSearchHome} = useContext(cearchcontext)
    let {searchByYears,setSearchByYears} = useContext(yearcontext)
    let inputRef = useRef();
    // let selectRef = useRef();
    let params = useParams();
    let nav = useNavigate()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    useEffect(() => { 
        doApi() ;
     }, [params.search])
     
     const doApi = async() => {
       let searchQ;
      let searchQ2 = params.search; 
      if(searchQ2){
        searchQ=searchQ2;
      } else if(searchHome){
        searchQ=searchHome;
      }else{
        searchQ= "bank";
      }
      
      console.log(searchQ)
      let _yearsQ ;  
      if(searchByYears)_yearsQ=searchByYears;
         let url = `https://www.omdbapi.com/?s=${searchQ}&y=${_yearsQ}&apikey=ab3bf0e7`
         try{
         let resp = await axios.get(url);
         console.log(resp.data.Search);
          setAr(resp.data.Search);        
         }
         catch(err){
           alert("There problem, come back later")
           nav("/")
           window.location.reload();
          }
       }


      const onBtnClick = () => {
        // doApi((inputRef.current.value)?inputRef.current.value:"bank");
        setSearchHome(inputRef.current.value);
        nav("/search/"+inputRef.current.value);
      }

    return(
        <div className='container'>
        <div className="row p-2">
          <div className="col-md-6 d-flex">
            <input ref={inputRef} placeholder='please enter a complete word...' type="search" className="form-control"/>
            <button onClick={onBtnClick} className='btn btn-info'>Search</button>
          </div>
        </div>
        <ListVod/>
      </div> 
    )
}

export default InputVod