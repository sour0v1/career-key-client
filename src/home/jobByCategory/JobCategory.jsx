import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const JobCategory = () => {
    const [category, setCategory] = useState('on-site');
    return (
        <div className='py-9 max-w-7xl mx-auto'>
            <div className='flex justify-center items-center gap-9 border-b-2 w-3/4 mx-auto'>
                <button onClick={() => setCategory('all')} className={`px-6 pb-3 box-border ${category === 'all' && 'border-[#005CE6] border-b-4'}`}>All Jobs</button>
                <button onClick={() => setCategory('on-site')} className={`px-6 pb-3 box-border ${category === 'on-site' && 'border-[#005CE6] border-b-4'}`}>On-site Job</button>
                <button onClick={() => setCategory('remote')} className={`px-6 pb-3 ${category === 'remote' && 'border-[#005CE6] border-b-4'}`}>Remote Job</button>
                <button onClick={() => setCategory('hybrid')} className={`px-6 pb-3 box-border ${category === 'hybrid' && 'border-[#005CE6] border-b-4'}`}>Hybrid</button>
                <button onClick={() => setCategory('part-time')} className={`px-6 pb-3 box-border ${category === 'part-time' && 'border-[#005CE6] border-b-4'}`}>Part Time</button>
            </div>

            {/* On-site Job */}
            {
                category === 'all' &&
                <div>
                    <h1>All Jobs</h1>
                </div>
            }
            {
                category === 'on-site' &&
                <div>
                    <h1>On-site Job</h1>
                </div>
            }
            {
                category === 'remote' &&
                <div>
                    <h1>Remote Job</h1>
                </div>
            }
            {
                category === 'hybrid' &&
                <div>
                    <h1>HybridJob</h1>
                </div>
            }
            {
                category === 'part-time' &&
                <div>
                    <h1>Part-time Job</h1>
                </div>
            }
        </div>
    );
};

export default JobCategory;