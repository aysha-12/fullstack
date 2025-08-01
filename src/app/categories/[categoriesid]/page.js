import { catrgoryName } from '@/utilites/categoryName/catecoryName';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page =async ({searchParams}) => {
    const data=await searchParams.category

    const category=await catrgoryName(data);


    return (
        <div  className='grid lg:grid-cols-2  gap-5 '>
            {
    
               category.map((data,i)=><Link href={`/${data.category}/${data._id}`} key={i}><div  className="card bg-base-200  shadow-sm">
  <figure>
    {/* <Image  className='h-72 w-full'
      src={data.thumbnail_url}
      height={200}
      alt={data.title }/> */}
  </figure>
  <div className="card-body">
   
    <p className="card-title">{data.title.slice(1,30)}</p>
    <p>{data.details.slice(1,100)}</p>
    
  </div>
</div></Link>)
            }        
        </div>
    );
};

export default page;