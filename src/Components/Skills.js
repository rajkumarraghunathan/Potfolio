import React from 'react'

const Skills = () => {
    return (
        <div className='py-5'>
            <h1>Skills</h1>
            <div class="container text-center">
                <h3 className='text-primary py-3'>Frontend</h3>
                <div class="row py-5">
                    <div class="col w-25"><img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-25" />HTML-5</div>
                    <div class="col"><img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" class="w-25" />CSS</div>
                    <div class="col"><img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="w-25" />Javascript</div>
                    <div class="col"><img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" class="w-25" />ReactJS</div>
                    <div class="col"><img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" class="w-25" />Redux</div>
                </div>
                <h3 className='text-primary py-3'>Backend</h3>
                <div class="row py-3">
                    <div class="col"><img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" class="w-25" />NodeJS</div>
                    <div class="col"><img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" class="w-25" />Express</div>
                </div>
                <h3 className='text-primary py-2'>Database</h3>
                <div class="row py-2">
                    <div class="col"><img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" class="w-25" />MYSQL</div>
                    <div class="col"><img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" class="w-25" />MongoDB</div>
                </div>
                <h3 className='text-primary py-2'>Tools</h3>
                <div class="row py-5">
                    <div class="col"><img alt="" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" class="w-25" />Postman</div>
                    <div class="col"><img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" class="w-25" />GitHub</div>
                    <div class="col"><img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" class="w-25" />Git</div>
                    <div class="col"><img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" class="w-25" />Bootstrap</div>
                </div>
            </div>
        </div>
    )
}

export default Skills