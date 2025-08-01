import { category } from '@/utilites/category/category';
import Link from 'next/link';
import React from 'react';

const Catego = async () => {
    const data = await category()
    return (
        <div>
            <div className='bg-base-200 p-5 rounded-2xl  shadow-4xl'>
                <div>
                    {
                        data?.map(info => <Link className='btn btn-outline  border-1 border-black block mt-5 text-xl ' key={info?._id} href={`/categories/news?category=${info.category}`}>{info.category}</Link>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Catego;