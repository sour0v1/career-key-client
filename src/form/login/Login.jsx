import React, { useState } from 'react';
import loginImage from '../../assets/login-img.png'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import SignUp from '../signup/SignUp';

const Login = () => {
    const [logValue, setLogValue] = useState('in');
    return (
        <div className='max-w-4xl mx-auto my-9 flex justify-center items-stretch'>
            <div className='w-full lg:w-1/2 bg-[#f5f5f5] py-9 rounded m-3 lg:m-0 px-3 lg:px-0'>
                <div className='bg-[#005CE6] bg-opacity-10 w-full lg:w-2/3 mx-auto flex justify-between items-center py-2 px-2 rounded-md'>
                    <Link onClick={() => setLogValue('in')} className={`py-2 border px-10 rounded-md ${logValue === 'in' ? 'bg-[#005CE6] text-white' : 'bg-[#f5f5f5]'}`}>Sign In</Link>
                    <Link onClick={() => setLogValue('up')} className={`py-2 border px-10 rounded-md ${logValue === 'up' ? 'bg-[#005CE6] text-white' : 'bg-[#f5f5f5]'}`}>Sign Up</Link>
                </div>

                {
                    logValue === 'in' ?
                        <div className='lg:w-2/3 mx-auto mt-6 space-y-6'>
                            <form className='space-y-3'>
                                <div className='flex flex-col gap-1'>
                                    <span>Email</span>
                                    <input className=' bg-gray-200 outline-none py-2 rounded-md border px-3' type="email" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <span>Password</span>
                                    <input className=' bg-gray-200 outline-none py-2 rounded-md border px-3' type="password" />
                                </div>
                                <input className='bg-[#005CE6] outline-none py-2 rounded-md text-white w-full' type="submit" value={'Sign In'} />
                            </form>
                            <p className='text-center'>Or</p>
                            <button className='bg-gray-200 hover:bg-gray-300 outline-none py-2 rounded-md w-full flex justify-center items-center gap-3'>
                                <span><FcGoogle /></span>
                                <span>Google</span>
                            </button>
                        </div> :
                        <SignUp></SignUp>
                }
            </div>
            {/* <div className='bg-[#005CE6] w-1/2 p-16'>
                <img className='h-full w-full object-cover' src={loginImage} alt="" />
            </div> */}
        </div>
    );
};

export default Login;