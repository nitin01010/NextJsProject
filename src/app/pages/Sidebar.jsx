"use client"
import { toast } from 'react-toastify';
import { Subscribe } from '../client/_document';
const Sidebar = () => {
    return (
        <aside className="hidden lg:block lg:w-[24.8%] fixed right-2  top-20 rounded-bl-lg h-[400px] bg-gradient-to-b from-black via-blue-900 to-blue-600 p-4">
            <div className=" bg-[#f2f2f2] rounded h-[300px]">
                <br />
                <h2 className="text-xl text-center  uppercase font-bold  mb-4 text-gray-200"><b>ADS SPACE</b> </h2>
            </div>
            <br />
            <div className=" bg-white p-2 h-[200px] rounded border hover:rotate-3 transition-all ease-linear  flex gap-1 justify-center items-center  mt-4  flex-col">
                <h2 className="text-xl text-center uppercase font-bold  mb-4 text-black"><b>Subscribe</b> </h2>
                <input type="email" placeholder="Enter you email ... " className=" capitalize bg-[#fff8f8]  outline-none font-normal  px-5 p-3 w-[100%] rounded-3xl" />

                <Subscribe />
            </div>
        </aside>
    );
};

export default Sidebar;
