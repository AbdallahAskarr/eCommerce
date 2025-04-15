import React from 'react'
import { Link } from 'react-router-dom'
const PageHeader = (props) => {
    return (
        <div className='pageheader-section' >
            <div className="container">
                <div className="row">
                    <div className='col-12' >
                        <div className='pageheader-content text-center' >

                            <h2>{props.title}</h2>
                            <nav aria-label='breadcrumb' >
                                <ol className='breadcrumb justify-content-center' >
                                    <li className='breadcrumb-item' ><Link to="/" >Home</Link></li>
                                    <li className='breadcrumb-item active' aria-current="page" >{props.curpage}</li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader