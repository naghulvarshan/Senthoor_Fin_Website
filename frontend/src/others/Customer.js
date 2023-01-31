import {React,useEffect}  from 'react';


import './Customer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from './Customer-service.jpg';
import img2 from './phone.png';
import img3 from './email.png';
import img4 from './address.png';


const Customer=()=>{

    useEffect(()=>{
        AOS.init({duration:800});
    },[]);


    function change(s){
        let a =document.querySelector("#"+s+" div span");
        let b =document.querySelectorAll("#"+s+" .faq-answer");
        if(a.innerHTML=='+'){
            a.innerHTML='-';
            for(let i=0;i<b.length;i++){
                 b[i].classList.add('view');
            }
        }
        else{
            a.innerHTML='+';
            for(let i=0;i<b.length;i++){
                 b[i].classList.remove('view');
            }
            
        }
    }
    

    return(

        <div className='cus-main-div'>
        <div className="relative">
            <img src={img1} className="picture"/>
            <div className="pic-text">
                <div className="pic-text1">CUSTOMER SERVICE</div>
                <div className="pic-text2">HAPPY TO</div>
                <div className="pic-text3">HELP ALWAYS</div>
            </div>
        </div>
        <div className="text">
            <h4 className="t-h">CUSTOMER SERVICE</h4>
            <p className="t-b">Welcome to Senthoor Motor Finance Customer Service. We value your relationship and your satisfaction is important to us.</p>
        </div>
        <div className="contact">
            <div className="contact-h">CONTACT US</div>
            <div className="contact-box">
                <div className="contact-b">
                    <img src={img2}/>
                    <h1 className='h11'>Phone</h1>
                    <h3 className='h31'>0422-249-0459</h3>
                </div>
                <div className="contact-b">
                    <img src={img3}/>
                    <h1 className='h11'>Email</h1>
                    <h3 className='h31'>senthoormotorfinance2000@gmail.com</h3>
                </div>
                <div className="contact-b">
                    <img src={img4}/>
                    <h1 className='h11'>Address</h1>
                    <h3 className='h31'>55,Ground floor,Sharadha Kripa Apartment,Raju Naidu Street,Sivanada colony,Coimbatore-641012</h3>
                </div>
            </div>
        </div>
        <div className="Faq">
            <div style={{"textAlign":"center"}}>
                <h2 style={{"display": "inline","fontSize":"2","fontWeight": "900"}}>FAQ</h2><h3 style={{"display":"inline","fontSize":"1","fontWeight": "900"}}>S</h3>
            </div>
            <div className="faq-box">
                <div id="c1"><div className="faq-question">What is EMI (Equated Monthly Instalment)?<span className="fspan material-symbols-outlined" onClick={()=>{change('c1')}}>+</span></div>
                <div className="faq-answer">EMI is Equated Monthly Instalment. It is a fixed amount to be paid by a borrower to the lender at a specified date each month. Every EMI comprises of principal and interest component which can be viewed in the Repayment Schedule</div></div>
                <div id="c2"><div className="faq-question">My vehicle has met with an accident/stolen?<span className="fspan material-symbols-outlined" onClick={()=>{change('c2')}}>+</span></div>
                <div className="faq-answer">If your vehicle has met with an accident/ stolen, you are requested to submit the copy of the following documents</div><div className="faq-answer">
                1. FIR</div><div className="faq-answer">2. Insurance Policy</div><div className="faq-answer">3. Claim Type</div><div className="faq-answer">4. Claim estimated amount</div><div className="faq-answer">5. Claim No.</div><div className="faq-answer">6. Date of accident/theft</div><div className="faq-answer">7. Voucher / Insurance Co. Letter / Mail revert copy</div>                
                <div className="faq-answer">Note: As per the Terms and Conditions of the Agreement, you are requested to pay the EMI until the settlement of your claim from the Insurance Company.</div>
                </div>
                <div id="c3"><div className="faq-question">Can I pre-close/foreclose my loan ? <span className="fspan material-symbols-outlined" onClick={()=>{change('c3')}}>+</span></div> 
                <div className="faq-answer">Yes, you can foreclose your loan. A pre-closure charge of 4.15% of the future  outstanding Principal amount of the loan or Rs.5150/-whichever is higher is applicable</div></div>
                <div id="c4"><div className="faq-question">Do you accept payments via credit card?<span className="fspan material-symbols-outlined" onClick={()=>{change('c4')}}>+</span></div>
                <div className="faq-answer">We do accept payments via credit card</div></div>
                <div id="c5"><div className="faq-question">What is CKYC?<span className="fspan material-symbols-outlined"onClick={()=>{change('c5')}}>+</span></div>
                <div className="faq-answer">CKYC is a 14 digit number which is linked with the customer's ID proof. As per regulatory guidelines, KYC details of customers are submitted to a central depository. This data is safely stored in electronic format. The document submitted is then verified with the issuer. All the concerned institutions are notified whenever there is a change in the KYC details of Customer</div></div>
                <div id="c6"><div className="faq-question">What happens if I miss a payment?<span className="fspan material-symbols-outlined" onClick={()=>{change('c6')}}>+</span></div>
                <div className="faq-answer">It is very important that you make your payments by the due date else charges will be levied & your credit report will get affected
                    Your vehicle could be repossessed if payments are not received in a timely manner. Legal proceedings may also be initiated against you.</div></div>
                <div id="c7"> <div className="faq-question">Can I make a cash payment? How much cash can I deposit at a time?
                <span className="fspan material-symbols-outlined" onClick={()=>{change('c7')}}>+</span></div>
                <div className="faq-answer">Yes. You can make a cash payment. However, we encourage you to make online payments. Please note that as per Income Tax Act, we will not accept cash more than Rs 1,99,000 in a single day & against a single EMI of your loan account. These limits shall also apply to direct cash deposit into our bank accounts.</div></div>
                <div id="c8"><div className="faq-question">Why are you charging pre-closure charges? As per RBI directive, there are no charges for pre-closure<span className="fspan material-symbols-outlined" onClick={()=>{change('c8')}}>+</span></div>
                <div className="faq-answer">As per RBI , pre-closure charges are not applicable for "floating interest rate " loans. All loans provided by us are "fixed interest rate " loans, hence preclosure charges are applicable</div></div>
            </div>
            </div>

        </div>
    );


}


export default Customer;


