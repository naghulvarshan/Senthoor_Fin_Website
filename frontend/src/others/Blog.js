import {React,useEffect}  from 'react';

import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import im1 from "./image-1.jpg";
import im2 from "./image-2.jpg";
import im3 from './image-3.jpg';
import im4 from './image-4.jpg';
import im5 from './blog-img-new-cover.jpg';



const Blog=()=>{

    useEffect(()=>{
        AOS.init({duration:800});
    },[]);



    return(
        <div className='blog-main-body-cover'>

<div id="bg" style={{"overflowY":"hidden"}}>
    <div id="bgc" /*style={{"backgroundColor":"#5fe4df"}}*/>
    <div id="bg1" style={{"overflowY":"hidden"}}>
      <img src={im5} width="100%" height="100%"/>
    </div>
    </div>
    <div id="text">
      <h2>To Know About Our Services</h2>
      <hr/>
    </div>
    <div className="blogs" style={{"overflowY":"hidden"}}>
      <div className="up">
        <div className="blog1">
          <a href=".\b1.html" className='a1'>
            <div>
              <img
              src={im1}
              alt="used-cars"
              width="200px"
              height="200px"
            />
            <p className='p1'>All you need to know about the used car loan</p>
            </div>
          </a>
        </div>
        <div className="blog2">
          <a href=".\b2.html" className='a1'>
            <div>
              <img
              src={im2}
              alt="used-cars"
              width="200px"
              height="200px"
            />
            <p className='p1'>How to get a car loan with bad credit score</p>
            </div>
          </a>
        </div>
      </div>
      <div className="down" >
        
        <div className="blog3">
        <a href=".\b3.html" className='a1'>
          <img src={im3} alt="used-cars" width="200px" height="200px" />
          <p className='p1'>Can I get a car loan without having an ITR in india</p>
        </a>
        </div>
        <div className="blog4">
          <a href=".\b4.html" className='a1'>
          <img src={im4} alt="used-cars" width="200px" height="200px" />
          <p className='p1'>How to get a Commercial Vechile Loan in India</p>
        </a>
        </div>
      </div>
    </div>
  </div>

        </div>
    );
}


export default Blog;


