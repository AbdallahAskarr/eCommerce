import React from 'react'

import img1 from "/src/Blog/category-1.jpg"
import img2 from "/src/Blog/category-2.jpg"
import img3 from "/src/Blog/category-3.jpg"
import img4 from "/src/Blog/category-4.jpg"

import "./BlogTeam.css";


const cardTeam = [
    {
        img: img1,
        name: "Accessories"
    },
    {
        img: img2,
        name: "Dress Collection",
    },
    {
        img: img3,
        name: "Jewellery",
    },
    {
        img: img4,
        name: "Cosmetics"
    }
]


// style
const style = {
    border: "none",
}

const BlogTeam = () => {
    return (
        <div className='container card_team ' >
            <div className='container'  >
                <div className='container' >


                    <div className='row g-1 row-cols-xl-4 row-cols-md-2 row-cols-2 justify-content-center  ' >


                        {

                            cardTeam.map((item, i) => (
                                <div key={i} className='col' >

                                    <div className='card  ' style={style}  >
                                        <div className='card-image' >
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className='card-body'  >
                                            <h4>{item.name}</h4>
                                        </div>
                                    </div>

                                </div>
                            ))


                        }



                    </div>


                </div>
            </div>
        </div>
    )
}

export default BlogTeam