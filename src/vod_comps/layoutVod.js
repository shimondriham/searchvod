import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function LayoutVod(props) {
  return (
    <div >
      <div className='strip'>
        <div className='box container'>
            <nav className=' p-3'>
          <Link to="/">search by name </Link>
          <span className='mx-2'>|</span>
          <Link to="/years/:years"> search by years</Link>
          </nav>
         <div> </div>
        </div>
        <p>IMBD Movie Search</p>
     
      </div>
      <main className='container'>
        <Outlet />
      </main>
      <footer className='container'>
        <h4 className=" text-center">© Created by Shimon Dariham 2022</h4>
      </footer>
    </div>
  )
}

export default LayoutVod