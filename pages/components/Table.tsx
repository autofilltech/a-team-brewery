import React, { useState, useEffect } from "react"
import Image from "next/image"
import TableResults from './TableResults'
import beer from "../assets/beer.png"

type SearchTerm = {
  searchTerm: string;
}

const Table = ({ searchTerm }: SearchTerm) => {
  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    const fetchBreweries = async (searchTerm: string) => {
      try {
        const response = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${searchTerm}&per_page=10`)
        const breweries = await response.json()
        setBreweries(breweries)
        console.log(breweries.length)
      } catch (error) {
        console.log('error')
      }
    }
    fetchBreweries(searchTerm)
  }, [searchTerm])
  

  return (
    <>
      { breweries.length > 1 ? (
        <TableResults breweries={breweries}/>
        ) : (
        <div className="w-full h-72 border border-gray-200 flex flex-col justify-center align-middle">
          <p className="text-black flex flex-col m-auto mb-0 text-xs">Could not find any matches!</p>
          <div className="w-20 h-20 relative flex flex-col m-auto mt-5">
            <Image src={beer} alt="" className="h-10 w-10 relative" layout="fill" />
          </div>
        </div>
        ) }
    </>
  )
}

export default Table