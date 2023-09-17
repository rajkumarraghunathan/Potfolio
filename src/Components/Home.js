import React from 'react'
import { BsArrowDownCircleFill } from 'react-icons/bs';
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
                </div>
            </main>

        </div>

    )
}

export default Home