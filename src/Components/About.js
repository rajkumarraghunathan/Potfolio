import React from 'react'
import photo from '../images/Rajkumar_Passport_size_photo.JPG'

const About = () => {
    return (

        <div className='py-5 container'>
            <h1 className=''>About me</h1>
            <div className='row'>
                <p className='container col' style={{ fontFamily: 'serif', textAlign: 'justify' }}>
                    As a passionate and dedicated MERN stack enthusiast, I am excited to embark on my journey in the world of web development. With a solid foundation in JavaScript and a deep interest in creating dynamic and responsive web applications, I am committed to learning and growing in this ever-evolving field.

                    My enthusiasm for problem-solving and attention to detail drive my pursuit of clean and efficient code. I am eager to contribute my skills in front-end and back-end development, as well as my ability to work collaboratively in a team-oriented environment.

                    I am eager to take on new challenges, expand my knowledge, and bring innovative solutions to the world of web development.
                </p>
                <div className='col'>
                    <img src={photo} alt='Profile_Photo' width='200' height='200' />
                </div>
            </div>
        </div>

    )
}

export default About