import Asideber from '@/ui/Sideber/Asideber';
import { singleGetUser } from '@/utilites/SingleGetUser/SingleGetUser';
import Image from 'next/image';
import React from 'react';

const SinglePage =async ({params}) => {
   const data=await singleGetUser(params.newsId)
    return (
        <div className='block md:flex justify-between   gap-5  px-10 py-5'>
           <div className='w-full md:w-2/3 '>
             <div className="card bg-base-300   shadow-sm">
  <figure>
    {/* <Image
      src={data.thumbnail_url}
      width={1000}
      height={500}
      alt={allNews[0].title} /> */}
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.details}</p>
   
  </div>
</div>
    <div className="card block  md:flex bg-base-300 mt-10  gap-5   shadow-sm">
      <div className='rounded-2xl '>
        {/* <Image
      src={data.thumbnail_url}
      width={1000}
      height={500}
      alt={data.title} /> */}
      fkjdkfjsdl
         
       </div> 
       <div className="p-5 gap-3 flex items-center ">
         <div className='bg-green-600 p-2  rounded-full'>
            <p className='bg-white rounded-full'>ghh</p>
            {/* <Image className='h-16 w-16'
         src={date.author.img}
          width={200}
         height={200}
          alt={data.title} />
         */}

         </div>
         <div>
            <h2 className='text-[16px]' >{data.author.name}</h2>
         <p className='text-[16px]' >{data.author.published_date}</p>
         </div>
       </div>
   </div>
            
      </div>
      <div className='mt-5 md:mt-0 w-full  md:w-1/3 '>
           <Asideber></Asideber>

        </div>

          
            
        </div>
    );
};

export default SinglePage;