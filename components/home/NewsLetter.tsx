"use client";

import Image from 'next/image'
import React from 'react'

const NewsLetter = () => {
    return (
        <>
            <section className="text-center py-[50px]">
                <div className="container">
                    <div className="py-12 px-4 relative bg-[#6D5FFD] rounded-3xl text-white lg:min-h-[350px] sm:min-h-0 flex flex-col items-center justify-center
                    before:content-[url('/news-before.svg')] before:absolute before:left-2 before:top-0 before:sm:hidden before:lg:block before:hidden
                after:content-[url('/news-after.svg')] after:absolute after:right-2 after:top-0 after:sm:hidden after:lg:block after:hidden">
                        <h2 className='text-4xl'>Sign Up to Our Newsletter</h2>
                        <p className="text-gray-300 max-w-[440px] mx-auto my-4">Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.</p>
                        <div className="mt-4 relative lg:size-4/12 sm:size-8/12 size-8/12 flex items-center mx-auto py-2">
                        <input type="email" placeholder='Enter Your Email ...' className='px-4 text-black w-full outline-none rounded-xl py-3' />
                            <button className="absolute right-2 p-1 rounded-lg bg-[#6D5FFD] hover:bg-[#111] transition-all">
                                <Image width={30} height={20} quality={100} alt='send' src='/send-icon.png' priority />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter
