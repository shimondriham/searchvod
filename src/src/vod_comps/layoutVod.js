import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ListVod from './listVod';

function LayoutVod(props) {
  return (
    <div >
      <div className='strip'>
        <nav className='bg-dark p-3 container '>
          <Link to="/">search by name </Link>
          <span className='mx-3'>|</span>
          <Link to="/years/:years"> search by years</Link>
          <span className='mx-3'>|</span>
          {/* <Link to="/type/:type"> search by type </Link> */}
        </nav>
      </div>
      <main className='container'>
        <Outlet />
      </main>
      <footer className='container'>
        <p className=" text-center">© Created by Shimon Dariham 2022</p>
      </footer>
    </div>
  )
}

export default LayoutVod