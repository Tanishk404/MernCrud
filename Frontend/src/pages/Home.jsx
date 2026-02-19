import React from 'react'
import DataBox from '../components/DataBox'

function Home({data, getData}) {
  return (
    <div>
        <DataBox getData={getData} data={data}/>
    </div>
  )
}

export default Home