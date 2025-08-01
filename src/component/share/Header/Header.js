import Image from 'next/image';
import React from 'react';
import img from '../../../assets/The Dragon News.png'
import { getFormattedDateLong } from '@/utilites/Data/date';

const Header = () => {
  const date=getFormattedDateLong()
    return (
        <div className='text-center p-10'>
          <Image src={img} className='mx-auto'height={200} width={700} alt='Bast news website,news wevsite'></Image>
          <p className='text-neutral-800'>Journalist without fear or favour</p>
          <p className='text-neutral-800'>{date}</p>
        </div>
    );
};

export default Header;