import React from 'react'

const Footer = () => {
    const array = [
        "Help",
        "Status",
        "About",
        "Careers",
        "Press",
        "Blog",
        "Privacy",
        "Terms",
        "Text to speech",
        "Terms",
    ]
    return (
        <div className=' flex flex-wrap  w-[100%] md:w-[50%]  m-auto md:p-2  justify-center border-2 font-light items-center gap-10 py-4 mt-2 bg-[#f2f2f2] '>
            {
                array.map((item, index) => {
                    return <p key={ index }>{ item }</p>
                })
            }
        </div>
    )
}

export default Footer