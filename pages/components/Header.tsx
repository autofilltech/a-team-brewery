import React, { useRef, useState, useEffect } from "react"
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'

function Header() {


  return (
    <header className="h-48 mt-32 w-full flex flex-col justify-between m-auto">
              <h1 className="text-6xl font-semibold text-black text-center">A-Team Brewery DB</h1>
              <div className='flex w-full m-0 flex-row py-4 justify-between items-center '>
          <h2 className='font-bold text-black'>Brewery List</h2>

          <form className='w-[30%] border flex flex-row border-gray-200 rounded-md pr-3'>
            <MagnifyingGlassIcon className='h-4 w-4 m-2  text-gray-400' />
            <input type="text" placeholder='Search brewery by name' className='text-xs outline-none border-none w-full' />
          </form>

        </div>

    </header>
  )
}

export default Header