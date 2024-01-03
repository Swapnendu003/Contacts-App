import React from 'react';
import Modal from '../components/Modal';
import { Formik, Form, Field } from "formik"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/Firebase';

const AddDeleteUpdate = ({ isOpen, onClose }) => {
    const addContact = async (contact) => {
        try {
             const contactRef = collection (db, "contacts")
             await addDoc (contactRef, contact)
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik 
                initialValues={{
                    Name: "",
                    Email: "",
                }}
                onSubmit={(values) => {
                    //console.log(values)
                    addContact (values);
                }}
                >
                    <Form className=' flex flex-col gap-4 '>
                        <div className=' flex flex-col gap-1 '>
                        <label htmlFor="Name">Name</label>
                        <Field name="Name" className="h-10 border "/>
                        </div>
                        <div className=' flex flex-col gap-1 '>
                        <label htmlFor="Email">Email Address</label>
                        <Field name="Email" className="h-10 border "/>
                        </div>
                        <button className=' bg-orange text-white px-3 py-1.5 self-end rounded-lg'>
                            Add Contact
                        </button>

                    </Form>
                </Formik>
            </Modal>
        </div>
    );
}

export default AddDeleteUpdate;
