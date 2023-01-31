import {React,useEffect}  from 'react';

import './services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import img1 from './afe-icon1.png';
import img2 from './afe-icon2.png';
import img3 from './afe-icon4.png';



const Services=()=>{

    useEffect(()=>{
        AOS.init({duration:800});
    },[]);


    return (
        <div>
          <div id="maindiv" style={{"overflow":"hidden"}}>
            <div id="innernav" >
                <div style={{"fontSize": "5vw"}}>
				    <h6 style={{"fontWeight":"750", "background":"rgba(0,0,0,0.8)", "display": "inline", "color":"white", "paddingLeft":"0.8%","paddingRight":"0.8%", "marginLeft":"1%", "fontSize": "2vw"}}>VEHICLE LOAN</h6>
                    <h6 style={{"color":"rgba(0,0,0,0.8)","padding":"0" ,"margin":"0","marginLeft":"1%"}}>INSTANT LOANS <span style={{"fontSize":"2vw", "color":"black", "fontWeight":"normal"}}><sup style={{"fontWeight":"700"}}>FOR</sup></span></h6>
                    <h6 style={{"color":"rgba(0,0,0,0.8)", "padding":"0" ,"margin":"0","marginLeft":"1%"}}><span style={{"fontSize":"2vw","fontWeight":"normal" ,"color":"black"}}><sup style={{"fontWeight":"700"}}>ALL YOUR </sup></span>PERSONAL &amp;</h6><h6 style={{"color":"rgba(0,0,0,0.8)","padding":"0","margin":"0","marginLeft":"1%"}}> COMMERCIAL VEHICLES</h6>
                </div>
            </div>
            <div >
                <div className="services-1">
                <div className="divcontain">
                <div id="wheelsdiv" style={{"textAlign":"center"}}><h1 style={{"fontWeight":"900"}}>GIVING WHEELS TO YOUR DREAM</h1><p style={{"width":"100%","margin":"auto"}}><a href="#" style={{"color":"#5680e9"}}>Interest rate </a><span>|</span><a href="#" style={{"color":"#5680e9"}}> commercial</a></p></div>
                <div>
                    <div ><p style={{"lineHeight":"25px"}}>Senthoor Motor Finance in Sivananda Colony, Coimbatore is a top player in the category Finance Companies in the Coimbatore. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Coimbatore . Over the course of its journey, this business has established the firm foothold in it's industry</p></div>
                    <div>
                    <div id="maindivbox">
                    <div className="divbox" style={{"background":`url(${img1})`,"backgroundRepeat": "no-repeat", "backgroundPosition": "center"}}>
                        <div className="cdivbox"><p className="pcdivbox">quick loan processing</p></div>
                    </div>
                    <div className="divbox" style={{"background": `url(${img2})`, "backgroundRepeat": "no-repeat", "backgroundPosition": "center"}}><div className="cdivbox"><p className="pcdivbox">attractive interest rates</p></div>
                    </div>
                    <div className="divbox" style={{"background": `url(${img3})`, "backgroundRepeat": "no-repeat", "backgroundPosition": "center"}}><div className="cdivbox"><p className="pcdivbox">minimal documentation</p></div>
                    </div>
                    <div className="divbox" style={{"background":`url(${img3})`, "backgroundRepeat": "no-repeat", "backgroundPosition": "center"}}><div className="cdivbox"><p className="pcdivbox">pocket friendly emi's to suit your needs</p></div>
                    </div>
                    <div className="divbox" style={{"background": `url(${img2})`, "backgroundRepeat": "no-repeat", "backgroundPosition": "center"}}><div className="cdivbox"><p className="pcdivbox">easy way to pay installments</p></div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            <div className="divcontain" style={{"padding-left":"3%","padding-right":"3%","marginBottom":"3%","paddingBottom":"2%"}}>
                <h1 style={{"textAlign":"center","fontWeight":"900","marginBottom":"2%"}}>ELIGIBILTY CRITERIA AND DOCUMENTS REQUIRED</h1>
                <p style={{"lineHeight":"25px","fontWeight":"700"}}>The vechile loan eligibility criteria can be different for different companies. The common criteria are as follows:</p>
                <ul style={{"lineHeight":"25px","paddingLeft":"10%","marginBottom":"2%"}}>
               <li >Age of the individual must be between 18 years and 75 years</li>
               <li >Minimum net monthly income of Rs. 10,000</li>
               <li >At least 1 year of employment with the current employer</li>
               <li >Must be salaried or self-employed, working for a government establishment or a private company</li>
                </ul>
                <p  style={{"lineHeight":"25px","fontWeight":"700","marginBottom":"2%"}}>To prove your eligibility, you’ll need to provide certain documents. Though this too is specific to different lenders, the common documents will be:</p>
                <table id="table1">
                    <tbody>
                         <tr>
                            <td style={{"textAlign":"center","fontWeight":"700","backgroundColor":"#5680E9"}}>
                               Identity proof (any of the following) 
                            </td>
                            <td>
                               <ul>
                                  <li>Aadhaar</li>
                                  <li>Passport</li>
                                  <li>Driving license</li>
                                  <li>Voters ID card</li>
                                  <li>PAN card</li>
                               </ul>
                            </td>
                         </tr>
                         <tr>
                            <td  style={{"textAlign":"center","fontWeight":"700","backgroundColor":"#5680E9"}}>
                               Address proof (any of the following) 
                            </td>
                            <td>
                               <ul>
                                  <li>Aadhaar</li>
                                  <li>Passport</li>
                                  <li>Driving license</li>
                                  <li>Ration card</li>
                                  <li>Utility bills</li>
                               </ul>
                            </td>
                         </tr>
                         <tr>
                            <td  style={{"textAlign":"center","fontWeight":"700","backgroundColor":"#5680E9"}}>
                               Proof of income 
                            </td>
                            <td>
                               <ul>
                                  <li>Form 16</li>
                                  <li>Salary slips if you are salaried</li>
                                  <li>Latest Income Tax Returns</li>
                                  <li>Bank statements going back 6 months</li>
                               </ul>
                            </td>
                         </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    );

    }


    export default Services;
