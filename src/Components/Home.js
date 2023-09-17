import React from 'react'
import { BsArrowDownCircleFill } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import pdf from '../PDF/Rajkumar_Resume.pdf'

const Home = () => {
    return (
        <div>
            <main className="container1">
                <div>
                    <p className='p'>Welcome to my profile</p>
                    <p>Hello 👋 I'm</p>
                    <section className="animation">
                        <div className="first"><div>R.RAJKUMAR</div></div>
                        <div className="second"><div>MERN STACK DEVELOPER</div></div>
                        <div className="third"><div>Full Stack web developer</div></div>
                    </section>
                    <div className='text-light'><a className='btn btn-success' href={pdf} target='_blank' download={pdf}>Resume<BsArrowDownCircleFill /></a></div>
                    <div className='d-flex justify-content-center'>
                        <p className='p-2'>
                            <a className='text-light' href='https://www.linkedin.com/in/rajkumar-r-0755b2184/' rel="noreferrer" target='_blank' data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on left">
                                <GrLinkedin className="text-light " />
                            </a>
                        </p>
                        <p className='p-2'>
                            <a className='' href='https://github.com/rajkumarraghunathan' rel="noreferrer" target='_blank'>
                                <BsGithub className="text-light " />
                            </a>
                        </p>
                    </div>
                </div>
            </main>

        </div>

    )
}

export default Home