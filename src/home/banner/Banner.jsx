import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="bg-cover bg-center w-full h-[600px]">
            <div className='bg-black bg-opacity-70 h-full text-white flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center lg:items-start gap-6'>
                    <h2 className='text-6xl font-bold text-center'>Find Talent, Find Jobs</h2>
                    <h2 className='text-2xl font-bold text-center'>A Platform Built for Success in Every Search</h2>
                    {/* <p>Connecting talent and opportunity – whether you’re hiring or looking, we’re here to make your search simple and successful.</p> */}
                    <button className='border px-16 py-4 mt-9 bg-[#f5f5f5] bg-opacity-10  hover:bg-[#f5f5f5] hover:text-[#005CE6] font-medium rounded'>Join Now</button>
                </div>
               
            </div>
        </div>
    );
};

export default Banner;