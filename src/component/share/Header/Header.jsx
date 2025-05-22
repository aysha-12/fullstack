import Image from 'next/image';
import React from 'react';
import img from '../../../assets/The Dragon News.png'

const Header = () => {
    return (
        <div className='text-center p-10'>
          <Image src={img} className='mx-auto'height={200} width={700} alt='Bast news website,news wevsite'></Image>
          <p className='text-neutral-800'>Journalist without fear or favour</p>
          <p className='text-neutral-800'>thursday 15, 2025</p>
        </div>
    );
};

export default Header;