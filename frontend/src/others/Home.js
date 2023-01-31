import {React,useEffect} from 'react';

import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import i1  from   "./icons8-accept-67.png";
import i2  from  "./marcel-eberle-rendLSpkDtY-unsplash.jpg";
import i3 from  "./cytonn-photography-n95VMLxqM2I-unsplash.jpg";
import i4 from  "./morgan-housel-PcDGGex9-jA-unsplash.jpg";
import i5  from "./Map.jpg";
import i6 from  "./kendall-scott-gHzJxTLJhu4-unsplash.jpg";
import i7 from  "./alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg";


import i8 from   "./1.png";
import i9 from   "./2.png";
import i10 from  "./3.png";
import i11 from  "./4.png";
import i12 from  "./5.png";
import i13 from  "./6.png";





const Home=()=>{


    useEffect(()=>{
        AOS.init({duration:800});
    },[]);


    useEffect(()=>{

        var r1=document.getElementById("r1");
    var r2=document.getElementById("r2");
    var r3=document.getElementById("r3");
    var r4=document.getElementById("r4");
    var r5=document.getElementById("r5");
    var r6=document.getElementById("r6");

    var img1=document.getElementById("img1");
    var img2=document.getElementById("img2");
    var img3=document.getElementById("img3");
    var img4=document.getElementById("img4");
    var img5=document.getElementById("img5");
    var img6=document.getElementById("img6");

function display(){
  var oncp=document.getElementById("oncp");
  var onc=document.getElementById("onc");
  onc.style.backgroundColor="rgba(0,0,0,0.4)";
  oncp.innerHTML="India's No. 1 Most Trusted Financial Services Brand by Power of Trust, TRA's Brand Trust Report for 6 years since 2016. With a resolute focus on providing customers with the best services, Senthoor Motor Finance has managed to earn the trust of millions.";
  img1.style.display="block";
  img2.style.display="none";
  img3.style.display="none";
  img4.style.display="none";
  img5.style.display="none";
  img6.style.display="none";
}

function display2(){
  var oncp=document.getElementById("oncp");
  var onc=document.getElementById("onc");
  onc.style.backgroundColor="rgba(0,0,0,0.4)";
  oncp.innerHTML="We provide personal and business loans secured by gold jewellery, or gold loans to individuals who possess gold but are unable to access formal credit within a reasonable time-frame, or to whom credit may not be available at all to meet unanticipated or other short-term liquidity requirements. Till date, we have served more than 70 crore satisfied customers (including repeat customers) in their times of need.";
  img2.style.display="block";
  img1.style.display="none";
  img3.style.display="none";
  img4.style.display="none";
  img5.style.display="none";
  img6.style.display="none";
}


function display4(){
  var oncp=document.getElementById("oncp");
  var onc=document.getElementById("onc");
  onc.style.backgroundColor="rgba(0,0,0,0.4)";
  oncp.innerHTML="Spread across all major states and cities in India, we ensure easy access to all our services. Dedicated to providing our customers with hassle-free financial services, we have become one of the most preferred brands in India.";
  img4.style.display="block";
  img1.style.display="none";
  img2.style.display="none";
  img3.style.display="none";
  img5.style.display="none";
  img6.style.display="none";
}


function display3(){
  var oncp=document.getElementById("oncp");
  var onc=document.getElementById("onc");
  onc.style.backgroundColor="rgba(0,0,0,0.4)";
  oncp.innerHTML="As per Power of Trust TRA Brand Trust Report (2016-2019), we have the largest Gold Loan Portfolio in India among NBFCs. Offering products like gold loans, personal loans, business loans, and more. Our prime concern is to ensure customer satisfaction in all our transactions.";
  img3.style.display="block";
  img1.style.display="none";
  img2.style.display="none";
  img4.style.display="none";
  img5.style.display="none";
  img6.style.display="none";
}


function display5(){
  var oncp=document.getElementById("oncp");
  var onc=document.getElementById("onc");
  onc.style.backgroundColor="rgba(0,0,0,0.4)";
  oncp.innerHTML="Since its establishment, the company has been dedicated to serving the interests of customers as a top priority. Our journey, which spans 800 years, together with our consistent growth showcase the trust that has been accorded to us by our customers all over the world.";
  img5.style.display="block";
  img1.style.display="none";
  img2.style.display="none";
  img3.style.display="none";
  img4.style.display="none";
  img6.style.display="none";
}



function display6(){
  var oncp=document.getElementById("oncp");
  var onc=document.getElementById("onc");
  onc.style.backgroundColor="rgba(0,0,0,0.4)";
  oncp.innerHTML="India has now entered a revolutionary phase and is standing shoulder to shoulder with global giants; simultaneously, there are abundant and unending growth opportunities in the domestic market as well. The growth rate of the Indian economy is more than 9% today, and while western companies are making a beeline for India to partake of this growth, homegrown firms have a distinct upper hand. ";
  img6.style.display="block";
  img1.style.display="none";
  img2.style.display="none";
  img3.style.display="none";
  img4.style.display="none";
  img5.style.display="none";
}
r1.addEventListener("click",display);
r2.addEventListener("click",display2);
r3.addEventListener("click",display3);
r4.addEventListener("click",display4);
r5.addEventListener("click",display5);
r6.addEventListener("click",display6);

// var disp=document.getElementsByClassName("main");
// disp.body.style.backgroundImage="url('https://www.sundaramfinance.in/assets/images/banner/Services.jpg')";




    },[]);


    
    return(

        <div style={{"overflow":"hidden"}}>


            
  <div className="main">
    <div className="content" data-aos="fade-up" data-aos-duration="1000" >
    </div>
    
  </div>




  <div id="about" >
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom">
      <h1>About Us</h1><br/>
      <p>Senthoor Motor Finance in Coimbatore is one of the leading businesses in the Finance Companies. Also known for Finance Companies, Loans and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Senthoor Motor Finance, Coimbatore.</p>
    </div>
  </div>
  

  <div id="choosecontainer">
  <div id="choose" data-aos="fade-up" data-aos-duration="1000" >
    <h2 >Why Choose Us?</h2>
  </div>


  <div className="why">
    <h3 data-aos="fade-right" data-aos-duration="1000" >Coimbatore's No1 Most Trusted<br/>Financial Services Brand</h3>
    <h3 data-aos="fade-right" data-aos-duration="1000" >Trusted by 1.2M+<br/>Satisfied Customers</h3>
    <h3 data-aos="fade-right" data-aos-duration="1000" >Largest Vehicle Loan <br/>Portfolio in Coimbatore</h3>
    <h3 data-aos="fade-left" data-aos-duration="1000" >Large Network of<br/>100+ Branches</h3>
    <h3 data-aos="fade-left" data-aos-duration="1000" >50 Years of<br/>Family Business Legacy</h3>
    <h3 data-aos="fade-left" data-aos-duration="1000" >Management<br/>Speaks</h3>
  </div>
  
  <div id="radio">
  <img src={i1} alt="" id="r1" data-aos="fade-right" data-aos-duration="1000"/>
  <img src={i1} alt="" id="r2" data-aos="fade-right" data-aos-duration="1000"/>
  <img src={i1} alt="" id="r3" data-aos="fade-right" data-aos-duration="1000"/>
  <img src={i1} alt="" id="r4" data-aos="fade-left" data-aos-duration="1000"/>
  <img src={i1} alt="" id="r5" data-aos="fade-left" data-aos-duration="1000"/>
  <img src={i1} alt="" id="r6" data-aos="fade-left" data-aos-duration="1000"/>
  </div>


  <div id="onc">
    <img src={i2} alt="" id="img1"/>
    <img src={i3} alt="" id="img2"/>
    <img src={i4} alt="" id="img3"/>
    <img src={i5} alt="" id="img4"/>
    <img src={i6} alt="" id="img5"/>
    <img src={i7} alt="" id="img6"/>
    <p id="oncp"></p>
  </div>
  
  </div>

  <div className="comments">
    <div><h2 id="review" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom">Reviews and Comments</h2></div>
    <div><img src={i8} alt="" id="i1" data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"/></div>
    <div><img src={i9} alt="" id="i2" data-aos="fade-left"  data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"/></div><br/>
    <div><img src={i10} alt="" id="i3" data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"/></div>
    <div><img src={i11} alt="" id="i4" data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"/></div><br/>
    <div><img src={i12} alt="" id="i5" data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"/></div>
    <div><img src={i13} alt="" id="i6" data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"/></div>

    

  </div>
  </div>
    );
}



export default Home;