import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { TiTrash } from "react-icons/ti";
import { FaCircleUser } from "react-icons/fa6";
import { db } from "../config/Firebase"
import { deleteDoc, doc } from 'firebase/firestore';
import AddDeleteUpdate from './AddDeleteUpdate';
import useDisclose from '../hooks/useDisclose';

const ContactCard = ({ contact }) => {
  const { isOpen, onOpen, onClose, } = useDisclose();


  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id))

    } catch (error) {
      console.log(error)

    }
  }

  return (
    <>
      <div key={contact.id} className='bg-yellow flex justify-between items-center p-2 rounded-lg'>
        <div className='flex gap-2'>
          <FaCircleUser className='text-orange text-4xl' />
          <div className=''>
            <h2 className='font-medium'>{contact.Name}</h2>
            <p className='text-sm'>{contact.Email}</p>
          </div>
        </div>

        <div className='flex text-3xl'>
          <FaRegEdit onClick={onOpen} className=' cursor-pointer' />
          <TiTrash onClick={() => deleteContact(contact.id)} className='text-orange cursor-pointer' />


        </div>

      </div>
      <AddDeleteUpdate isOpen={isOpen} onClose={onClose} isUpdate contact={contact} />

    </>

  );
}

export default ContactCard;
