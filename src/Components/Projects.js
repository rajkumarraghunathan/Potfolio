import React from 'react'
import Portal from '../images/Portal Thumbnail.jpg'
import Markdown from '../images/1.jpg'
import Ecommerce from '../images/E commerce .png'

const Projects = () => {
    return (
        <div className='py-5 container'>
            <h1>Projects</h1>

            <div>
                <p><span className='text-primary fw-bold'>Credentials admin</span>:9003490676raj@gmail.com <span className='text-primary fw-bold'>password:</span>123456789</p>
                <p><span className='text-primary fw-bold'>Credentials User</span>:amrr7raghu@gmail.com <span className='text-primary fw-bold'>password:</span>123456789</p>
            </div>

            <div className='d-flex justify-content-center flex-column'>

                <div class="card text-center shadow-lg p-3 mb-5 bg-body rounded" >
                    <img src={Portal} class="card-img-top" alt="Rental Equipment Portal" />
                    <div class="card-body">
                        <h2 class="card-title fw-bold text-primary">Rental Equipment Portal</h2>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item ">
                                <div className='d-flex justify-content-center'>
                                    <h1 class="accordion-header " id="flush-headingOne">
                                        <button class="accordion-button collapsed btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Description
                                        </button>
                                    </h1>
                                </div>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Developing an equipment rental portal using the MERN stack. The frontend (React.js) handles the user interface for browsing, filtering, and renting equipment. Backend (Node.js & Express.js) manages business logic, user authentication, cart, and payments. MongoDB stores data, and features include user auth, equipment listings, cart, order management, and admin panel. Payment integration ensures secure transactions. Security and performance optimizations ensure a smooth user experience.
                                        View</div>
                                    <a href='https://benevolent-rabanadas-8249e7.netlify.app' target='_blank' rel='noreferrer'>Click</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card text-center shadow-lg p-3 mb-5 bg-body rounded">
                    <img src={Markdown} class="card-img-top" alt="React Markdown Viewer" />
                    <div class="card-body">
                        <h2 class="card-title fw-bold text-primary">React Markdown Viewer</h2>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item ">
                                <div className='d-flex justify-content-center'>
                                    <h1 class="accordion-header " id="flush-headingTwo">
                                        <button class="accordion-button collapsed btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Description
                                        </button>
                                    </h1>
                                </div>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        React Markdown Viewer is a powerful and versatile React component that enables the rendering and display of Markdown content within a web application. It provides a seamless way to parse and transform Markdown syntax into structured and visually appealing HTML elements, allowing users to easily view and interact with formatted text, headings, lists, code blocks, and other Markdown elements in a dynamic and responsive manner.
                                    </div>
                                    <a href='https://lighthearted-toffee-fb9353.netlify.app' target='_blank' rel='noreferrer'>Click</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card text-center shadow-lg p-3 mb-5 bg-body rounded">
                    <img src={Ecommerce} class="card-img-top" alt="E Commerce" />
                    <div class="card-body">
                        <h2 class="card-title fw-bold text-primary">E Commerce Website</h2>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item ">
                                <div className='d-flex justify-content-center'>
                                    <h1 class="accordion-header " id="flush-headingThree">
                                        <button class="accordion-button collapsed btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Description
                                        </button>
                                    </h1>
                                </div>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        To buy a product from the site and the seller to sell the product
                                    </div>
                                    <a href='https://radiant-quokka-c36440.netlify.app' target='_blank' rel='noreferrer'>Click</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects