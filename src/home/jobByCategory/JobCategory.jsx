import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobCategory = () => {
    const [category, setCategory] = useState('all');
    return (
        <div className='my-16 max-w-7xl mx-auto px-3 lg:px-0'>
            <div className='flex justify-center items-center gap-6 lg:gap-9 border-b-2 lg:w-2/3 mx-auto overflow-x-auto lg:overflow-auto flex-nowrap mb-9'>
                <button onClick={() => setCategory('all')} className={`lg:px-6 pb-3 box-border whitespace-nowrap ${category === 'all' && 'border-[#005CE6] border-b-4'}`}>All Jobs</button>
                <button onClick={() => setCategory('on-site')} className={`lg:px-6 pb-3 box-border whitespace-nowrap ${category === 'on-site' && 'border-[#005CE6] border-b-4'}`}>On-site Job</button>
                <button onClick={() => setCategory('remote')} className={`lg:px-6 pb-3 box-border whitespace-nowrap ${category === 'remote' && 'border-[#005CE6] border-b-4'}`}>Remote Job</button>
                <button onClick={() => setCategory('hybrid')} className={`lg:px-6 pb-3 box-border whitespace-nowrap ${category === 'hybrid' && 'border-[#005CE6] border-b-4'}`}>Hybrid</button>
                <button onClick={() => setCategory('part-time')} className={`lg:px-6 pb-3 box-border whitespace-nowrap ${category === 'part-time' && 'border-[#005CE6] border-b-4'}`}>Part Time</button>
            </div>

            {/* On-site Job */}
            {
                category === 'all' &&
                <div className='flex flex-col lg:flex-row justify-center items-center gap-9'>
                    <div className='p-6 bg-[#f5f5f5] w-full lg:w-1/4 space-y-2 rounded h-[300px] n flex flex-col '>
                        <h2 className='font-medium text-xl border-l-4 pl-3 border-l-[#005CE6]'>Junior Frontend Web Developer</h2>
                        <div className='space-y-2 flex-grow'>
                            <p>Posted on : <span>6 November, 2024</span></p>
                            <p>Deadline : <span>16 November, 2024</span></p>
                            <p>Salary : <span>20000</span></p>
                            <p>Applicants : <span>20</span></p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className=''>Posted by <span className='font-medium'>Das</span></h3>
                            <Link className='px-4 py-2 text-white bg-[#005CE6] rounded hover:bg-opacity-80'>Details</Link>
                        </div>
                    </div>
                    <div className='p-6 bg-[#f5f5f5] w-full lg:w-1/4 space-y-2 rounded h-[300px] n flex flex-col '>
                        <h2 className='font-medium text-xl border-l-4 pl-3 border-l-[#005CE6]'>Social Media Content Strategist</h2>
                        <div className='space-y-2 flex-grow'>
                            <p>Posted on : <span>6 November, 2024</span></p>
                            <p>Deadline : <span>16 November, 2024</span></p>
                            <p>Salary : <span>20000</span></p>
                            <p>Applicants : <span>20</span></p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className=''>Posted by <span className='font-medium'>Das</span></h3>
                            <Link className='px-4 py-2 text-white bg-[#005CE6] rounded hover:bg-opacity-80'>Details</Link>
                        </div>
                    </div>
                    <div className='p-6 bg-[#f5f5f5] w-full lg:w-1/4 space-y-2 rounded h-[300px] n flex flex-col '>
                        <h2 className='font-medium text-xl border-l-4 pl-3 border-l-[#005CE6]'>Content Creator for Educational YouTube Channels</h2>
                        <div className='space-y-2 flex-grow'>
                            <p>Posted on : <span>6 November, 2024</span></p>
                            <p>Deadline : <span>16 November, 2024</span></p>
                            <p>Salary : <span>20000</span></p>
                            <p>Applicants : <span>20</span></p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className=''>Posted by <span className='font-medium'>Das</span></h3>
                            <Link className='px-4 py-2 text-white bg-[#005CE6] rounded hover:bg-opacity-80'>Details</Link>
                        </div>
                    </div>
                    <div className='p-6 bg-[#f5f5f5] w-full lg:w-1/4 space-y-2 rounded h-[300px] n flex flex-col '>
                        <h2 className='font-medium text-xl border-l-4 pl-3 border-l-[#005CE6]'>Web Development Specialist</h2>
                        <div className='space-y-2 flex-grow'>
                            <p>Posted on : <span>6 November, 2024</span></p>
                            <p>Deadline : <span>16 November, 2024</span></p>
                            <p>Salary : <span>20000</span></p>
                            <p>Applicants : <span>20</span></p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className=''>Posted by <span className='font-medium'>Das</span></h3>
                            <Link className='px-4 py-2 text-white bg-[#005CE6] rounded hover:bg-opacity-80'>Details</Link>
                        </div>
                    </div>
                    
                </div>
            }
            {
                category === 'on-site' &&
                <div>
                     <div className='p-6 bg-[#f5f5f5] w-full lg:w-1/4 space-y-2 rounded h-[300px] n flex flex-col '>
                        <h2 className='font-medium text-xl border-l-4 pl-3 border-l-[#005CE6]'>Junior Backend Developer - Node & Express</h2>
                        <div className='space-y-2 flex-grow'>
                            <p>Posted on : <span>6 November, 2024</span></p>
                            <p>Deadline : <span>16 November, 2024</span></p>
                            <p>Salary : <span>20000</span></p>
                            <p>Applicants : <span>20</span></p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className=''>Posted by <span className='font-medium'>Das</span></h3>
                            <Link className='px-4 py-2 text-white bg-[#005CE6] rounded hover:bg-opacity-80'>Details</Link>
                        </div>
                    </div>
                </div>
            }
            {
                category === 'remote' &&
                <div>
                     <div className='p-6 bg-[#f5f5f5] w-full lg:w-1/4 space-y-2 rounded h-[300px] n flex flex-col '>
                        <h2 className='font-medium text-xl border-l-4 pl-3 border-l-[#005CE6]'>Junior Frontend Web Developer</h2>
                        <div className='space-y-2 flex-grow'>
                            <p>Posted on : <span>6 November, 2024</span></p>
                            <p>Deadline : <span>16 November, 2024</span></p>
                            <p>Salary : <span>20000</span></p>
                            <p>Applicants : <span>20</span></p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className=''>Posted by <span className='font-medium'>Das</span></h3>
                            <Link className='px-4 py-2 text-white bg-[#005CE6] rounded hover:bg-opacity-80'>Details</Link>
                        </div>
                    </div>
                </div>
            }
            {
                category === 'hybrid' &&
                <div>
                     <div className='p-6 bg-[#f5f5f5] w-full lg:w-1/4 space-y-2 rounded h-[300px] n flex flex-col '>
                        <h2 className='font-medium text-xl border-l-4 pl-3 border-l-[#005CE6]'>Junior Backend Developer - Node & Express</h2>
                        <div className='space-y-2 flex-grow'>
                            <p>Posted on : <span>6 November, 2024</span></p>
                            <p>Deadline : <span>16 November, 2024</span></p>
                            <p>Salary : <span>20000</span></p>
                            <p>Applicants : <span>20</span></p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className=''>Posted by <span className='font-medium'>Das</span></h3>
                            <Link className='px-4 py-2 text-white bg-[#005CE6] rounded hover:bg-opacity-80'>Details</Link>
                        </div>
                    </div>
                </div>
            }
            {
                category === 'part-time' &&
                <div>
                     <div className='p-6 bg-[#f5f5f5] lg:w-1/4 space-y-2 rounded h-[300px] n flex flex-col '>
                        <h2 className='font-medium text-xl border-l-4 pl-3 border-l-[#005CE6]'>Frontend Engineer - React & Tailwind CSS</h2>
                        <div className='space-y-2 flex-grow'>
                            <p>Posted on : <span>6 November, 2024</span></p>
                            <p>Deadline : <span>16 November, 2024</span></p>
                            <p>Salary : <span>20000</span></p>
                            <p>Applicants : <span>20</span></p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className=''>Posted by <span className='font-medium'>Das</span></h3>
                            <Link className='px-4 py-2 text-white bg-[#005CE6] rounded hover:bg-opacity-80'>Details</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default JobCategory;