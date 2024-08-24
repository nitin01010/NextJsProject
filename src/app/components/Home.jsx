import React from 'react';
import Stores from './Stores';

const Home = () => {
    return (
        <div>
            <div className='flex gap-3 overflow-scroll pb-4 -mt-4 hide-scrollbar'>
                {
                    [...Array(10)].map((_, index) => (
                        <Stores key={ index } />
                    ))
                }
            </div>

            <h1 className='text-center text-base md:text-2xl font-bold mb-4 mt-3'>
                Latest Articles
            </h1>
            <div className='p-1 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    [...Array(10)].map((_, index) => (
                        <a href={ `/post/${Math.random()}` }
                            key={ index }
                        >
                            <div

                                className='w-[100%] rounded py-2 cursor-pointer'
                            >
                                <img
                                    src='https://images.unsplash.com/photo-1719937206098-236a481a2b6d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='object-cover rounded w-[100%]'
                                    alt='Article'
                                />
                                <p className='text-lg px-1 mt-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptatum obcaecati numquam impedit consequatur placeat labore
                                </p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
