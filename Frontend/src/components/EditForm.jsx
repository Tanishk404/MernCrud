import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoArrowBackCircleSharp } from "react-icons/io5";

import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

function EditForm({getData}) {
    const { id } = useParams();
    const [updatedata, setUpdatedData] = useState({
        name: "",
        country: "",
        email: "",
    })

    
    const inputHandle = async (e) => {
        const { name, value } = e.target;
        setUpdatedData((prev) => ({...prev, [name]:value}))
    }


   

    useEffect(() => {
        const GetDataForUpdation = async () => {
        try {
            const res = await axios.get(`http://localhost:3005/edit/${id}`);

            setUpdatedData(res.data.data);
            
            
            
        } catch (error) {
            console.log(error.message, "getting error in get data for update from backend");
        }
    }
    GetDataForUpdation();
    }, [id])


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            
            const res = await axios.put(`http://localhost:3005/edit/${id}`, updatedata);
            console.log("after put");

            toast.success("Data updated successfully");
            
            await getData();

            setUpdatedData({
                    name: "",
                    country: "",
                    email: "",
                })
            
        } catch (error) {
            toast.error("Failed to updated data");
            console.log(error, "Somthing wrong in frontend in edit form")
        }
    }
    

  return (
    <div>
        <form className='flex flex-col w-96 bg-gray-400 justify-center text-center items-center h-96 gap-5 mt-32 rounded-lg' onSubmit={handleSubmit}>
        <Link to="/" className='text-3xl relative right-40 '>
            <IoArrowBackCircleSharp />
        </Link>
            <input type="text" name="name" className='w-64 p-2 ' placeholder='enter name for update' value={updatedata.name} onChange={inputHandle}/>
            <input type="text" name="country" className='w-64 p-2 ' placeholder='enter country for update' value={updatedata.country} onChange={inputHandle}/>
            <input type="email" name='email' className='w-64 p-2 ' placeholder='enter email for update' value={updatedata.email} onChange={inputHandle} />
            {/* <input type="text" name='password' className='w-64 p-2 ' placeholder='enter name for update' value={updatedata.password} onChange={inputHandle} /> */}
            <button className='bg-red-400 p-2 w-40 text-white rounded-xl'>Edit</button>
        </form>
    </div>
  )
}

export default EditForm