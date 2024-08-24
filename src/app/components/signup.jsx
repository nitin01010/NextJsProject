import React from 'react'

const Signup = () => {
    return (
        <div className='  w-[100%] md:w-[50%]   -mt-1 p-2  m-auto     '>
            <div className="bg-white p-8 rounded-lg shadow-lg w-[50%] max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <button
                    className="w-full flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                >
                    <img
                        src="https://developers.google.com/identity/images/g-logo.png"
                        alt="Google logo"
                        className="w-5 h-5 mr-2"
                    />
                    Sign up with Google
                </button>
            </div>
        </div>
    )
}

export default Signup