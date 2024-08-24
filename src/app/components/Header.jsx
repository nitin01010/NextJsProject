import React from 'react'
import { ButtonsSignin, ButtonsSignup } from '../client/_document'

const Header = () => {
    return (
        <div className=' flex items-center shadow-md    lg:sticky  lg:top-0 z-50 justify-between gap-4  transition-all ease-linear delay-150 bg-white mb-3  h-[73px] py-2 p-2'>
            <div className=' flex gap-4  lg:px-6 items-center'>
                <h1 className=' text-3xl font-semibold'>Medium</h1>
                <input type="search" placeholder='Search' className=' font-medium hidden md:block bg-[#f2f2f2] outline-none border-none px-4 h-[40px]  rounded-3xl ' />
            </div>
            <div className=' flex gap-2 lg:px-6 items-center'>
                <ButtonsSignup />
                <ButtonsSignin />
            </div>
        </div>
    )
}

export default Header