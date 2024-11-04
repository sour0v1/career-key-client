import React from 'react';
import { FaFacebook, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='bg-[#005CE6]  py-16 text-white space-y-4 px-3 lg:px-0'>
            <div className='flex flex-col lg:flex-row justify-between gap-9 max-w-7xl mx-auto pb-6'>
                <div className='lg:w-1/3'>
                    <h2 className='font-bold pb-2'>CareerKey</h2>
                    <div className='space-y-4'>
                        <p>CareerKey is your dedicated job-seeking platform, designed to make finding your next opportunity simple and efficient. Explore tailored job listings, bookmark your favorites, and stay organized as you take the next step in your career journey.</p>
                        <div className='space-y-1'>
                            <div className='flex justify-start items-center gap-2'>
                                <span><FaPhoneAlt /></span>
                                <span>+8809642589</span>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <span><MdEmail /></span>
                                <span>info@careerkey.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/3'>
                    <h2 className='font-bold  pb-2'>Latest Blog</h2>
                    <div className='space-y-4'>
                        <p>Your trusted platform to explore, bookmark, and apply for the latest job opportunities tailored just for you.</p>
                        <p>Your trusted platform to explore, bookmark, and apply for the latest job opportunities tailored just for you.</p>
                        <p>Your trusted platform to explore, bookmark, and apply for the latest job opportunities tailored just for you.</p>

                    </div>

                </div>
                <div className='lg:w-1/3'>
                    <h2 className='font-bold pb-3'>Stay in touch</h2>
                    <div className='flex justify-start items-center gap-5 text-xl'>
                        <span><FaFacebook /></span>
                        <span><FaYoutube /></span>
                        <span><FaSquareInstagram /></span>
                        <span><FaSquareXTwitter /></span>
                    </div>
                </div>

            </div>
            <p className='border-t border-gray-300 max-w-7xl mx-auto'></p>
            <div className='flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto gap-2 lg:gap-0'>
                <div className='flex justify-start items-center gap-5'>
                    <span>Home</span>
                    <span>Blogs</span>
                    <span>Applied Jobs</span>
                    <span>Add Jobs</span>
                </div>
                <p>© <span>{new Date().getFullYear()}</span> CareerKey. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;