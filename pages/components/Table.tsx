import React, { useState, useEffect} from "react"
import TableResults from './TableResults'

type SearchTerm = {
  searchTerm: string;
}

const Table = ({ searchTerm }:SearchTerm) => {
  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    const fetchBreweries = async (searchTerm: string) => {
      try {
        const response = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${searchTerm}&per_page=7`)
        const breweries = await response.json()
        setBreweries(breweries)
        console.log(breweries)
        return breweries
      } catch (error) {
        console.log('error')
      }
    }
    fetchBreweries(searchTerm)
  }, [searchTerm])

  

  return (
    <>
    {breweries ? (<TableResults breweries={breweries}/>):("something")}
    
    {/* {Pagination} */}
    </>
  )
}

export default Table