import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className='relative'>
        <input type='text' placeholder='search...' className='w-64 max-md:w-32 rounded-full text-xs max-sm:px-5 max-sm:py-1 py-2 px-7 text-gray-700 shadow  focus:shadow-md shadow-gray-200 outline-none'/>
        <Image src="/icons/search.svg" alt='search' width={20} height={20} className='absolute sm:left-2 sm:top-2.5 left-1 top-1.75 cursor-pointer'/>
    </div>
  )
}

export default Search