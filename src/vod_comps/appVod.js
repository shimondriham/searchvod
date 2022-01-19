import React, { useState } from 'react';
import InputVod from './inputVod';
import ListVod from './listVod';
import { arcontext } from '../context/arcontext';

// import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';

function AppVod(props){
    let [ar, setAr] = useState([]);


    return(
        <arcontext.Provider value={{ ar: ar, setAr: setAr }}>
            <InputVod/>
            <ListVod/>
        </arcontext.Provider>
    )
}

export default AppVod