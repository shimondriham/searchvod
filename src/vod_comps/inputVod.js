import React ,{useContext, useEffect ,useRef}from 'react';
import { arcontext } from '../context/arcontext';
import axios from 'axios';

function InputVod(props){
    let {ar,setAr}  = useContext(arcontext)
    let inputRef = useRef();
    let selectRef = useRef();
    useEffect(() => {
        doApi("bank") ;
     }, [])
     
     const doApi = async(_searchQ) => {
         let url = `http://www.omdbapi.com/?s=${_searchQ}&apikey=ab3bf0e7`
         try{
         let resp = await axios.get(url);
         console.log(resp.data.Search);
         setAr(resp.data.Search);
         }
         catch(err){
           alert("There problem, come back later")
         }
       }

     const doApiYears = async(_yearsQ) => {
         let url = `http://www.omdbapi.com/?s=${_searchQ}&y=${_yearsQ}&apikey=ab3bf0e7`
         try{
         let resp = await axios.get(url);
         console.log(resp.data.Search);
         setAr(resp.data.Search);
         }
         catch(err){
           alert("There problem, come back later")
         }
       }

      const onBtnClick = () => {
        doApi(inputRef.current.value);
      }
      const selectYears = () => {
        console.log(selectRef.current.value);
        doApiYears(selectRef.current.value);
      }

    return(
        <div className='container'>
        <div className="row p-2">
          <div className="col-md-6 d-flex">
            <input ref={inputRef} placeholder='search by movie name...' type="search" className="form-control"/>
            <button onClick={onBtnClick} className='btn btn-info'>Search</button>
          </div>
          <div className="col-md-6 d-flex">
          <select onChange={selectYears} ref={selectRef} className='form-control select2'>        
                <option value="#">chouse years</option>
                <option value="2021">2021</option>
                <option value="2021">2021</option>
                <option value="2000">2000</option>
                <option value="1995">1995</option>
                <option value="1989">1989</option>
            </select>
          </div>

        </div>
      </div> 
    )
}

export default InputVod