import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faLinkedin, faTwitter, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
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
        <div className='bg-black p-10 text-center'>
            <div className='flex justify-center'>
                  <Link href='/'><FontAwesomeIcon className='w-6 mr-3 text-white' icon={faFacebook} /></Link>
                    <Link href='/'><FontAwesomeIcon className='w-6 mr-3 text-white' icon={faYoutube} /></Link>
                    <Link href='/'><FontAwesomeIcon className='w-6 text-white mr-3' icon={faTwitter} /></Link>
                    <Link href='/'><FontAwesomeIcon className='w-6 text-white mr-3' icon={faLinkedin} /></Link>
                    <Link href='/'><FontAwesomeIcon className='w-6 text-white ' icon={faWhatsapp} /></Link>
                  

            </div>
            <div>
                <ul className="menu menu-horizontal px-1">
                   {navItems.map((itme,i)=><li key={i} className='text-white font-semibold'><Link href={itme.path}>{itme.route}</Link></li>)}
              </ul>
            </div>
            <p className='text-neutral-700'>&copy the news protal created by Aysha Rhaman</p>
        </div>
    );
};

export default Footer;