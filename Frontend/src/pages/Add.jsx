import axios from 'axios';
import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { Link } from "react-router-dom"
import { IoArrowBackCircleSharp } from "react-icons/io5";
function Add({getData}) {
    
    const [state, setState] = useState({
        name: "",
        country: "",
        email: "",
        password: ""
    })

const handleInput = (e) => {
    const {name, value} = e.target;
    setState((prev) =>( {
        ...prev, [name]: value
    }))
}

const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        const res = await axios.post("http://localhost:3005/", state);
        await getData();
        toast.success("Data saved successfully", );
        
        setState({
            name: "",
            country: "",
            email: "",
            password: ""
        })

        
    } catch (error) {
        console.log(error, "something went wrong in posting data on backend")
    }
    
  }  

  return (
    <div className='flex justify-center'>
            
        <form className='flex flex-col w-96 bg-gray-400 justify-center text-center items-center h-96 gap-5 mt-32 rounded-lg'  onSubmit={handleSubmit}>
            <Link to="/" className='text-3xl relative right-40 '>
                <IoArrowBackCircleSharp />
            </Link>
            <input type="text" className='w-64 p-2 ' placeholder='Enter name' value={state.name} onChange={handleInput} name='name'/>
            <input type="text" className='w-64 p-2 ' placeholder='Enter country' value={state.country} onChange={handleInput} name='country'/>
            <input type="text" className='w-64 p-2 ' placeholder='Enter email' value={state.email} onChange={handleInput} name='email' />
            <input type="text" className='w-64 p-2 ' placeholder='Enter password' value={state.password} onChange={handleInput} name='password' />
            <button type='submit' className='bg-red-400 p-2 w-40 text-white rounded-xl'>Submit</button>
        </form>
    </div>
  )
}

export default Add