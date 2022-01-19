import React ,{useContext, useEffect ,useRef}from 'react';
import { arcontext } from '../context/arcontext';
import {cearchcontext} from '../context/cearchcontext';
import axios from 'axios';
import ListVod from './listVod';

function SearchYears(props){

       let {ar,setAr}  = useContext(arcontext);
       let {searchHome,setSearchHome} = useContext(cearchcontext);
       let selectRef = useRef();

 const doApiYears = async(_yearsQ,_searchQ) => {
         let url = `http://www.omdbapi.com/?s=${_searchQ}&y=${_yearsQ}&apikey=ab3bf0e7`
         try{
         let resp = await axios.get(url);
         console.log(resp.data.Search);
         setAr(resp.data.Search);
         }
         catch(err){
           alert("There problem, come back later");
         }
       }

   const selectYears = () => {
        console.log(selectRef.current.value);
        doApiYears(selectRef.current.value,(searchHome)?searchHome:"bank");
      }

    return(

        <div className="container">
         <div className="col-md-6 ">
            <select onChange={selectYears} ref={selectRef} className='form-control select2'>        
                <option value="">chouse years</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
            </select>
          </div>
          <ListVod/>
        </div> 
    )
}

export default SearchYears;