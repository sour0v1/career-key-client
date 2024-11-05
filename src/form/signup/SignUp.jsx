import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    return (
        <div className='lg:w-2/3 mx-auto mt-6 space-y-6'>
            <form className='space-y-3'>
                <div className='flex flex-col gap-1'>
                    <span>Name</span>
                    <input className=' bg-gray-200 outline-none py-2 rounded-md border px-3' type="text" />
                </div>
                <div className='flex flex-col gap-1'>
                    <span>Email</span>
                    <input className=' bg-gray-200 outline-none py-2 rounded-md border px-3' type="email" />
                </div>
                <div className='flex flex-col gap-1'>
                    <span>Password</span>
                    <div className='relative'>
                        <input className=' bg-gray-200 outline-none py-2 rounded-md border px-3 w-full' type={showPass ? 'text' : 'password'} />
                        <button onClick={() => setShowPass(!showPass)} type='button' className='absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-200 inline-block px-3 h-full'>
                            {
                                showPass ?
                                    <span><IoEyeOutline /></span> :
                                    <span><IoEyeOffOutline /></span>

                            }
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <span>Photo URL</span>
                    <input className=' bg-gray-200 outline-none py-2 rounded-md border px-3' type="text" />
                </div>
                <input className='bg-[#005CE6] outline-none py-2 rounded-md text-white w-full' type="submit" value={'Sign Up'} />
            </form>
            <p className='text-center'>Or</p>
            <button className='bg-gray-200 hover:bg-gray-300 outline-none py-2 rounded-md w-full flex justify-center items-center gap-3'>
                <span><FcGoogle /></span>
                <span>Google</span>
            </button>
        </div>
    );
};

export default SignUp;