import React, { useState } from 'react'
import EditForm from '../components/EditForm'

function Edit({getData}) {

    
  return (
    <div className='flex justify-center'>
        <EditForm getData={getData} />
    </div>
  )
}

export default Edit