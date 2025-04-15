import React from 'react'

import { Link } from 'react-router-dom';

const btntext = "Sign Up For Free";
const title = "Shop Anytime, Anywhere";
const desc = `Take Shop On  Any Devices With  Our App  & Learn All Time What You Whant . Just Download &
Install & Start To Learn`


const AppSection = () => {
    return (
        <div className='app-section padding-tb' >

            <div className='container' >
                <div className='section-header text-center' >
                    <Link to="/sign-up" className="lab-btn mb-4"  >{btntext}</Link>
                    <h2 className='title' >{title}</h2>
                    <p  >{desc}</p>
                </div>

                <div className='section-wrapper' >
                    <ul className='lab-ul' >
                        <li><a href="#"><img src="/src/assets/images/app/01.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="/src/assets/images/app/02.jpg" alt="" /></a></li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default AppSection