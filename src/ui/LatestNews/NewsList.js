import { news } from '@/utilites/all-news';
import Image from 'next/image';
import React from 'react';

const NewsList =async () => {
      const allNews=await news()
   
    return (
        <div>
                  {/* singal data */}
            
            <div className="card bg-base-100  shadow-sm">
  <figure>
    {/* <Image
      src={allNews[0]?.thumbnail_url}
      width={1000}
      height={500}
      alt={allNews[0].title} /> */}
  </figure>
  <div className="card-body">
    <h2 className="card-title">{allNews[0].title}</h2>
    <p>{allNews[0].details}</p>
   
  </div>
</div>


{/* grid */}

<div className='grid md:grid-cols-2 gap-5 mt-5'>
         {
            allNews?.slice(1,9).map((data,i)=>  <div key={i} className="card bg-base-100  shadow-sm">
  <figure>
    {/* <Image className='h-72 w-full'
      src={data?.thumbnail_url}
      
      height={200}
      alt={data.title} /> */}
  </figure>
  <div className="card-body">
    <h2 className="card-title ">{data.title.slice(1,50)}</h2>
    <p>{data.details.slice(1,100)}</p>
   
  </div>
</div>
)
         }

</div>
            
        </div>
    );
};

export default NewsList;