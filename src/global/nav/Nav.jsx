import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Link } from 'react-router-dom';
// <IoMdArrowDropup /> <IoMdArrowDropdown />

const Nav = () => {
    const [isDrop, setIsDrop] = useState(false);
    return (
        <div className='bg-[#005CE6] text-[#f5f5f5] py-3 lg:py-2 relative px-3'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <h1 className='text-xl lg:text-2xl font-bold whitespace-nowrap'>CareerKey</h1>
                <button onClick={() => setIsDrop(!isDrop)} className='flex lg:hidden justify-center items-center gap-1'>
                    <span>Menu</span>
                    {isDrop ?
                        <span className='text-xl'><IoMdArrowDropup /></span> :
                        <span className='text-xl'><IoMdArrowDropdown /></span>}
                </button>
                <div className={`flex flex-col lg:flex-row justify-center lg:items-center absolute lg:static bg-[#005CE6] lg:gap-6 whitespace-nowrap top-full left-0 w-full lg:w-auto ${isDrop ? 'block' : 'hidden lg:flex'}`}>
                    <Link className='border-y lg:border-none py-3 hover:bg-[#f5f5f5] lg:hover:bg-[#005CE6] lg:hover:underline hover:text-[#005CE6] lg:hover:text-[#f5f5f5] px-6 lg:px-0'>Home</Link>
                    <Link className='border-b lg:border-none py-3 hover:bg-[#f5f5f5] lg:hover:bg-[#005CE6] lg:hover:underline hover:text-[#005CE6] lg:hover:text-[#f5f5f5] px-6 lg:px-0'>All Jobs</Link>
                    <Link className='border-b lg:border-none py-3 hover:bg-[#f5f5f5] lg:hover:bg-[#005CE6] lg:hover:underline hover:text-[#005CE6] lg:hover:text-[#f5f5f5] px-6 lg:px-0'>Applied Jobs</Link>
                    <Link className='border-b lg:border-none py-3 hover:bg-[#f5f5f5] lg:hover:bg-[#005CE6] lg:hover:underline hover:text-[#005CE6] lg:hover:text-[#f5f5f5] px-6 lg:px-0'>Add a Job</Link>
                    <Link className='border-b lg:border-none py-3 hover:bg-[#f5f5f5] lg:hover:bg-[#005CE6] lg:hover:underline hover:text-[#005CE6] lg:hover:text-[#f5f5f5] px-6 lg:px-0'>My Jobs</Link>
                    <Link className='border-b lg:border-none py-3 hover:bg-[#f5f5f5] lg:hover:bg-[#005CE6] lg:hover:underline hover:text-[#005CE6] lg:hover:text-[#f5f5f5] px-6 lg:px-0'>Blogs</Link>
                </div>
                <Link to={'/login'} className='lg:hover:underline'>Sign In</Link>
            </div>
        </div>
    );
};

export default Nav;