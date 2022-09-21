import React from 'react'

const ContryDetail = ({country}) => {
  return (
    <div>
          <h1>CONTRY BOILIVIA</h1>
           <ul>
               <li> <span>Name: </span> {country?.name.common}</li>
               <li> <span>Flag: </span> {country?.flag}</li>
               <li> <span>Fifa: </span> {country?.fifa}</li>
               <li> <span>Subregion: </span> {country?.subregion}</li>
           </ul>


    </div>
  )
}

export default ContryDetail