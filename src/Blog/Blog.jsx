import React from 'react'
import PageHeader from '../Component/PageHeader'

import "./Blog.css";
// import { Data } from './BlogData.jsx';

import header from "./header.png"
import BlogTeam from './BlogTeam';

const info = (
  {

    title: 'Up To 20% Discount On',
    title2: "Girl's Fashion",
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ducimus
    suscipit sint cupiditate ab, repellat labore eius aut temporibus nulla laudantium?` ,
    btn: "Explore Now",


  }
)



const Blog = () => {
  return (
    <div>
      <section className='container  ' >
        <div id='space' ></div>

        <div className='row  row-cols-xl-2 row-cols-sm-1  row-cols-1  ' id='parent' >

          <div className='col'  >
            <div className='information' >
              <h4 className='title1' >{info.title}</h4>
              <h1 className='title2  ' >{info.title2}</h1>
              <ol className='ol1' >
                <li>
                  <p className='text1' >{info.text}</p>

                </li>
                <li>
                  <p className='text1' >{info.text}</p>

                </li>
              </ol>
              <button className='btn1' >{info.btn}</button>
            </div>
          </div>


          <div className='col' >
            <img src={header} id='image' className='p-2' alt="" />
            <br />
            <br />

          </div>

        </div>



      </section>


      <BlogTeam />

    </div>
  )
}

export default Blog