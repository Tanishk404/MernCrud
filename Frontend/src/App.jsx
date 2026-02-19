import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Add from './pages/Add';
import { ToastContainer } from 'react-toastify';
import Edit from './pages/Edit';
function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3005/");
      const allData = res.data.data;
      setData(allData);

    }catch (error) {
      console.log(error, "not getting data from backend");
    }
    }
  
  useEffect(() => {
      getData();
  }, []);


  

  return (
    <div className='bg-gray-300 h-screen'>
        <ToastContainer  />
        <Routes>
            <Route path='/' element={<Home getData={getData} data={data} />} />
            <Route path='/add' element={<Add getData={getData} />} />
            <Route path='/edit/:id' element={<Edit getData={getData} />} />
        </Routes>
    </div>
  )
}

export default App
