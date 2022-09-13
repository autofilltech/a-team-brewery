import React from 'react'
import { BrewsData } from '../../lib/search/types';

type AllBreweries = {
  breweries: BrewsData[];
}

const TableResults = ({ breweries }: AllBreweries) => {
 
return (
  
  <table className='w-full text-left text-xs border border-gray-300 shadow-sm pl-32'>
    <tbody className='text-black w-full'>
      <tr className=' border border-gray-200 uppercase'>
        <th>Name</th>
        <th>City</th>
        <th>Country</th>
        <th>Street</th>
        <th>-</th>
      </tr>
      {breweries.map((brews, i) => {
        return (
          <>
            <tr key={i}>
              <td>{brews.name}</td>
              <td>{brews.city}</td>
              <td>{brews.country}</td>
              <td>{brews.street}</td>
              <td>-</td>
            </tr>
          </>
        )
      })}

    </tbody>
  </table>
)
    }

export default TableResults