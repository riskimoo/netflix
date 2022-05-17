import React from 'react'

const Navbar = () => {
    return (
        <div className='text-white flex items-center justify-between p-4 z-[100] absolute w-full'>
            <h1 className='text-red-600 cursor-pointer text-4xl font-bold'>NETFLIX</h1>
            <div>
                <button className='pr-4 '>SIGN IN</button>
                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>SIGN UP</button>
            </div>

        </div>
    )
}

export default Navbar