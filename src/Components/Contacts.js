import React, { useState, useEffect } from 'react';
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

const Contacts = () => {


    const [getEmail, setGetEmail] = useState('')
    const [getText, setGetText] = useState('')

    const handleForm = (event) => {
        event.preventDefault();
        try {

        } catch (error) {

        }
    }

    return (
        <div className='py-5 bg-dark'>
            <h1 className='text-light'>Contact me</h1>
            <div className='d-flex justify-content-center'>
                <p className='p-2'>
                    <a className='bg-light border rounded-circle p-1 border-5' href='https://www.linkedin.com/in/rajkumar-r-0755b2184/' target='_blank'>
                        <GrLinkedin />
                    </a>
                </p>
                <p className='p-2'>
                    <a className='bg-light border rounded-circle p-1 border-5' href='https://github.com/rajkumarraghunathan' target='_blank'>
                        <BsGithub />
                    </a>
                </p>
            </div>
            <form onSubmit={handleForm}>
                <div className='container pt-5'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label text-light">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" value={getEmail} onChange={e => setGetEmail(e.target.value)} required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label text-light">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={getText} onChange={e => setGetText(e.target.value)} required></textarea>
                    </div>
                    <div>
                        <button className='btn btn-success' >Send me a mail</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Contacts