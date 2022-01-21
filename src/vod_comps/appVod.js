import React, { useState } from 'react';
import InputVod from './inputVod';
import SearchType from './searchType';
import LayoutVod from './layoutVod';
import SearchYears from './searchYears';
import ListVod from './listVod';
import {cearchcontext} from '../context/cearchcontext';
import { arcontext } from '../context/arcontext';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import MorInfo from './morInfo';


function AppVod(props){
    let [ar, setAr] = useState([]);
    let [searchHome, setSearchHome] = useState();

    return(
        <arcontext.Provider value={{ ar: ar, setAr: setAr }}>
           <cearchcontext.Provider value={{  searchHome, setSearchHome }}>
             <Router>
               <Routes>
                 <Route path="/" element={<LayoutVod/> }>
                  <Route index element={ <InputVod/>} />              
                   {/* <Route path="/info/:id" element={   <MorInfo/>} />  */}
                 
                  <Route path="/search/:search" element={<InputVod/>} /> 
                  <Route path="/years/:years" element={<SearchYears/>} /> 
                  <Route path="/type/:type" element={<SearchType/>} />  
                  <Route path="/info/:id" element={<MorInfo/>} />  
                 
                </Route>
              </Routes>
            </Router>     
           </cearchcontext.Provider>
        // </arcontext.Provider> 
    )
}

export default AppVod