import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify';
function DeleteButton({v, getData}) {        
        const DeleteFun = async () => {
            try {
                const res = await axios.delete(`http://localhost:3005/${v._id}`)
                toast.success("Deleted successfully");
                await getData();
                
            } catch (error) {
                toast.error("Not delete data")
                console.log(error.message, "not delete");
            }
        

        } 

  

  return (
    <div>
        <button onClick={DeleteFun}  className="bg-red-500 text-white px-2">Delete</button>
    </div>
  )
}

export default DeleteButton