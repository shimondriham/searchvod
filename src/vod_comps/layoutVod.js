import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ListVod from './listVod';

function LayoutVod(props){
    return(
       <div className='container'>
       
      <nav className='bg-info p-3  '>
        <Link to="/"> home search </Link>|
        <Link to="/years/:years"> search by years</Link> |
        <Link to="/type"> search by type </Link>|

      </nav>
      <main>
        <Outlet />
        <ListVod/>
      </main>
    </div>
    )
}

export default LayoutVod