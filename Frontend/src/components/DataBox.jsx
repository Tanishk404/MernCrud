import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { Link, useParams } from "react-router-dom"
import DeleteButton from "./DeleteButton";
function DataBox({data, getData}) {
    

  return (
    <div id="one" className="w-full text-center justify-items-center flex-col">
      <div className="flex items-center mx-auto w-[70%]">
        <Link to="/add" className="w-12 h-12 bg-blue-400 text-white text-2xl rounded-full inline-flex items-center justify-center">
          <IoMdAddCircle />
        </Link>
        <table className="w-[70%]">
          <thead>
            <tr className="bg-red-300">
              <th className="border p-2">Name</th>
              <th className="border p-2">Country</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Buttons</th>
            </tr>
          </thead>
          <tbody>
                {data.map((v,i) => {
                    return(
                        <tr key={i} className="bg-green-300">
                        
                        <td className="border p-2">{v.name}</td>
              <td className="border p-2">{v.country}</td>
              <td className="border p-2">{v.email}</td>
              <td className="border p-2">
                <div>
                  <Link to={`/edit/${v._id}`}  className="bg-green-600 text-white px-2">Edit</Link>
                      <DeleteButton getData={getData} v={v} />
                </div>
              </td>
            </tr>
                        
                    )
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataBox;
