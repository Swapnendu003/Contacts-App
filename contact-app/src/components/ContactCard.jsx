import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { TiTrash } from "react-icons/ti";
import { FaCircleUser } from "react-icons/fa6";

const ContactCard = ({contact}) => {
  return (
    <div key={contact.id} className='bg-yellow flex justify-between items-center p-2 rounded-lg'>
    <div className='flex gap-2'>
    <FaCircleUser className='text-orange text-4xl'/>
     <div className=''>
       <h2 className='font-medium'>{ contact.Name }</h2>
       <p className='text-sm'>{contact.Email}</p>
     </div>
    </div>

     <div className='flex text-3xl'>
     <FaRegEdit />
     <TiTrash className='text-orange '/>

       
     </div>

   </div>
  );
}

export default ContactCard;
