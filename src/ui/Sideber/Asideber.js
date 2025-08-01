import { news } from '@/utilites/all-news';
import Image from 'next/image';

import React from 'react';

const Asideber =async () => {
    const allNews=await news()
    return (
        <div>
               <div className="card bg-base-100  shadow-sm">
  <figure>
    {/* <Image className='h-68'
      src={allNews?.thumbnail_url}
       width={600}
      height={500}
     
      alt={allNews[9].title} /> */}
  </figure>
  <div className="card-body">
    <h2 className="card-title">{allNews[9].title}</h2>
    <p>{allNews[9].details}</p>
   
  </div>
</div>
<div>

  {
    
  }
  
    <div className=' mt-3'>
         {
            allNews.slice(10,23).map((data,i)=>  <div key={i} className=" bg-base-100 flex py-1 mt-4 shadow-xl">
  
    {/* <Image className='h-24 w-24 rounded-2xl'
      src={data?.thumbnail_url}
      
      height={100}
      alt={data.title} /> */}
  
  <div className='pl-2 '>
    
    <h2 className="card-title  ">{data.title.slice(1,30)}</h2>
    <p>{data.details.slice(1,50)}</p>
   
   
  </div>
</div>
)
         }

</div>
      

</div>
<div className="card bg-base-100 mt-3 shadow-sm">
  <figure>
    {/* <Image className='h-68'
      src={allNews[23]?.thumbnail_url}
      width={600}
      height={500}
      alt={allNews[23].title} /> */}
  </figure>
  <div className="card-body">
    <h2 className="card-title">{allNews[23].title}</h2>
    <p>{allNews[23].details}</p>
   
  </div>
</div>
            
        </div>
    );
};

export default Asideber;