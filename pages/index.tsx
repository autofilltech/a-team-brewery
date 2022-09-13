import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { useRef, useState} from "react"
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import Table from "./components/Table";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const searchRef = useRef<HTMLInputElement>(null)

  // We update the searchterm value as user submits form
  // Then the searchterm value is passed on to the Table component to be used in the API query
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchTerm(searchRef.current?.value || " ")
  }


  return (
    <div className="w-[70%] flex flex-col m-auto">
      <Head>
        <title>A-Team Brewery App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-48 mt-32 w-full flex flex-col justify-between m-auto">
              <h1 className="text-6xl font-semibold text-black text-center">A-Team Brewery DB</h1>
              <div className='flex w-full m-0 flex-row py-4 justify-between items-center '>
          <h2 className='font-bold text-black'>Brewery List</h2>
          <form className='w-[30%] border flex flex-row border-gray-200 rounded-md pr-3'onSubmit={handleSubmit}>
            <MagnifyingGlassIcon className='h-4 w-4 m-2  text-gray-400' />
            <input type="text" placeholder='Search brewery by name' className='text-xs outline-none border-none w-full' ref={searchRef} />
          </form>
        </div>
    </header>
    <div className='border-b border-gray-200 mb-8 relative block w-full h-[1px]'></div>

    <section className='w-full h-fit relative justify-center mb-32'>
       <Table searchTerm={searchTerm}/>
    </section>
    

    </div>
  );
};

export default Home;
