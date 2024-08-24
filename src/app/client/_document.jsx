"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { IoCloseOutline } from "react-icons/io5";
const stories = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1719937206098-236a481a2b6d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Lorem ipsum dolor sit amet consectetur.',
    },
];

export const ButtonsSignup = () => {
    const router = useRouter();
    return (
        <button
            onClick={ () => router.push('/signup') }
            className='p-1 text-black hidden md:block border rounded-3xl py-2 w-[90px] bg-[#f2f2f2]'
            aria-label="Sign up"
        >
            Sign up
        </button>
    );
};


export const ButtonsSignin = () => {
    const router = useRouter();
    return (
        <button
            onClick={ () => router.push('/signin') }
            className='p-1 text-black hidden md:block border rounded-3xl py-2 w-[90px] bg-[#f2f2f2]'
            aria-label="Sign in"
        >
            Sign in
        </button>
    );
};


export const Subscribe = () => {
    const router = useRouter();
    return (
        <button className=" py-3 p-2 bg-red-500 text-white rounded-3xl  px-5 w-[100%] mt-3" onClick={ () => toast('Subscribe') }>Subscribe</button>
    );
};


export const StoryCardClient = () => {
    const [isStoryVisible, setIsStoryVisible] = useState(false);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    useEffect(() => {
        if (isStoryVisible) {
            // Lock scrolling
            document.body.style.overflow = 'hidden';

            const timer = setTimeout(() => {
                setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
            }, 10000); // 10 seconds

            return () => {
                clearTimeout(timer);
                // Unlock scrolling
                document.body.style.overflow = '';
            };
        }
    }, [isStoryVisible, currentStoryIndex]);

    const handleCardClick = () => {
        setIsStoryVisible(true);
    };

    const handleCloseStory = () => {
        setIsStoryVisible(false);
    };

    return (
        <div className='relative'>
            <div
                className='relative w-[300px] h-[400px] min-w-[300px] p-2 rounded flex flex-col overflow-hidden cursor-pointer'
                onClick={ handleCardClick }
            >
                <div className='absolute inset-0 z-0'>
                    <div
                        className='absolute inset-0'
                        style={ {
                            backgroundColor: 'black',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            filter: 'blur(100px)',
                            opacity: 0.1,
                            zIndex: '-1',
                        } }
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30'></div>
                </div>
                <div className='relative z-10 flex flex-col'>
                    <div className='footer bg-white p-2 rounded text-start mt-auto'>
                        { stories[currentStoryIndex].text }
                    </div>
                </div>
            </div>

            {/* Fullscreen story view with transition */ }
            <div
                className={ `fixed inset-0 flex items-center justify-center z-50 transition-transform duration-300 ${isStoryVisible ? 'translate-y-0' : 'translate-y-full'
                    }` }
            >
                <div className='absolute inset-0 bg-black opacity-70'></div>
                <div
                    className='relative w-full h-[95vh] m-3 flex items-center justify-center bg-cover bg-center rounded-lg'
                    style={ {
                        backgroundImage: `url(${stories[currentStoryIndex].imageUrl})`,
                        borderRadius: '10px',
                    } }
                >
                    <button
                        className='absolute top-4 right-4 text-black rounded-full bg-white w-[40px] h-[40px] text-3xl font-bold flex items-center justify-center'
                        onClick={ handleCloseStory }
                    >
                        <IoCloseOutline className='m-auto' />
                    </button>
                    <div className='absolute bottom-4 text-white text-center px-4 max-w-xs bg-black bg-opacity-50 p-2 rounded'>
                        { stories[currentStoryIndex].text }
                    </div>
                </div>
            </div>
        </div>
    );
};