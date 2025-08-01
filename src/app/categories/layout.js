


import Catego from '@/ui/categoryList/Catego';

import React from 'react';


const layout = ({children}) => {
    
    return (
        <div className='my-20'>
            <div className='block lg:flex justify-between   gap-5 px-5 md:px-10 py-5'>
                <div className='w-full lg:w-1/3 '> 
                <Catego></Catego>
                   
                </div>
                <div  className='w-full lg:w-2/3 mt-5 md:mt-0 '>{children}</div>
            </div>
        </div>
    );
};

export default layout; 