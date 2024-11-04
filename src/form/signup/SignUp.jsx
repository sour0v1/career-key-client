import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
    return (
        <div className='w-2/3 mx-auto mt-6 space-y-6'>
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
                    <input className=' bg-gray-200 outline-none py-2 rounded-md border px-3' type="password" />
                </div>
                <div className='flex flex-col gap-1'>
                    <span>Photo URL</span>
                    <input className=' bg-gray-200 outline-none py-2 rounded-md border px-3' type="text" />
                </div>
                <input className='bg-[#005CE6] outline-none py-2 rounded-md text-white w-full' type="submit" value={'Sign Up'} />
            </form>
            <p className='text-center'>Or</p>
            <button className='bg-gray-200 outline-none py-2 rounded-md w-full flex justify-center items-center gap-3'>
                <span><FcGoogle /></span>
                <span>Google</span>
            </button>
        </div>
    );
};

export default SignUp;