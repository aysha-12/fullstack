import React from 'react';
import Header from '../Header/Header';
import Link from 'next/link';

const Navber = () => {

    const navItems = [
    {
        route: 'Home',
        path: '/'
    },
    {
        route: 'Categories',
        path: '/categories'
    },
    {
        route: 'About',
        path: '/about'
    },
    {
        route: 'Contact',
        path: '/contact'
    },
     {
        route: 'Pages',
        path: '/pages'
    },
]
    return (
        <div>
            <Header></Header>
            



            <div className="navbar bg-black shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
         {navItems.map((itme,i)=><li key={i} className='text-black font-semibold'><Link href={itme.path}>{itme.route}</Link></li>)}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems.map((itme,i)=><li key={i} className='text-white font-semibold'><Link href={itme.path}>{itme.route}</Link></li>)}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navber;