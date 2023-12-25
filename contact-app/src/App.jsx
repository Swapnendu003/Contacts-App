import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import { IoSearchOutline } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";



function App() {

const [contacts, setContacts] = useState([])
useEffect (() => {
  const getContacts = async () =>{

  }
  getContacts()
})
  return (
    <div className=' mx-auto max-w-[370px] '>
      <Navbar />
      <div className='flex gap-2 '>
        <div className=' flex relative just items-center flex-grow'>
          <IoSearchOutline className='text-white text-3xl absolute pl-2' />
          <input type="text" className=' bg-transparent border border-white rounded-lg h-10 flex-grow text-white pl-8 ' />
        </div>
        <div className=' text-white text-4xl cursor-pointer'>
          <FaPlusCircle />
        </div>
      </div>
    </div>

  )
}

export default App
