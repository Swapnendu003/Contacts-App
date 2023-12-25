import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import { IoSearchOutline } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore"
import { db } from "./config/Firebase"

import ContactCard from './components/ContactCard';



function App() {

const [contacts, setContacts] = useState([])
useEffect (() => {
  const getContacts = async () =>{

try {
  const contactsRef = collection (db, "contacts")
  const contactsSnap = await getDocs (contactsRef)
  const contactLists = contactsSnap.docs.map((doc) => {
    return{
      id: doc.id,
      ...doc.data()
    }
  })
setContacts(contactLists)
  
} catch (error) {
  console.log(error)
  
}

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
      <div className='mt-4'>
        {contacts.map((contact)=>(
<ContactCard key= {contact.id} contact= {contact} />
        ))}
      </div>
    </div>

  )
}

export default App
