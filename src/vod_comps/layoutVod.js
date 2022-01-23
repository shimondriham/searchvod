import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ListVod from './listVod';

function LayoutVod(props){
    return(
       <div className='container'>
      
      <nav className='bg-dark p-3  '>
        <Link to="/">search by name </Link>
        <span className='mx-3'>|</span> 
        <Link to="/years/:years"> search by years</Link> 
        {/* <Link to="/type/:type"> search by type </Link>| */} 
      </nav>
       <div className='strip'></div>
      <main>
        <Outlet />
      </main>
      <footer>
      <p class=" text-center">© Created by Shimon Dariham 2022</p>
      </footer>
    </div>
    )
}

export default LayoutVod