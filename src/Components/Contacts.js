import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import axios from 'axios';
import API_URL from './Api';

const Contacts = () => {


    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const handleForm = async (event) => {
        event.preventDefault();
        try {
            // Make a POST request to your backend API for sending emails
            const response = await axios.post(`${API_URL}/sendEmail`, {
                email,
                message,
            });

            // Check if the email was sent successfully
            if (response.status === 200) {
                return toast('Email sent successfully');
            } else {
                return toast('Email sending failed');
            }
        } catch (error) {
            console.error(error);
            return toast('Email sending failed');
        }
    }

    return (
        <div className='py-5 bg-dark'>
            <h1 className='text-light'>Contact me</h1>
            <div className='d-flex justify-content-center'>
                <p className='p-2'>
                    <a className='bg-light border rounded-circle p-1 border-5' href='https://www.linkedin.com/in/rajkumar-r-0755b2184/' rel="noreferrer" target='_blank'>
                        <GrLinkedin />
                    </a>
                </p>
                <p className='p-2'>
                    <a className='bg-light border rounded-circle p-1 border-5' href='https://github.com/rajkumarraghunathan' rel="noreferrer" target='_blank'>
                        <BsGithub />
                    </a>
                </p>
            </div>
            <form onSubmit={handleForm}>
                <div className='container pt-5'>
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlInput1" class="form-label text-light">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" class="form-label text-light">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
                    </div>
                    <div>
                        <button className='btn btn-success' >Send me a mail</button>
                    </div>
                    <ToastContainer />
                </div>
            </form>
        </div>

    )
}

export default Contacts