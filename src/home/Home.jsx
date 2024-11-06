import React from 'react';
import Banner from './banner/Banner';
import JobCategory from './jobByCategory/JobCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;