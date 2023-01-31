import {React} from 'react';

import './b1style.css';

import im1 from "./image-1.jpg";
import im2 from "./image-2.jpg";
import im3 from './im2.jpg';
import im4 from './image-3.jpg';


const B4=()=>{

    return(
        <div>

<header>
      <img src={im3} alt="banner" className="i" width="50%" height="auto" />
    </header>
    <div className="container">
      <div id="content">
        <h1>HOW TO GET COMMERCIAL VEHICLE LOAN IN INDIA?</h1>
        <p>
          A commercial vehicle loan makes it very convenient for business
          entities and individuals to purchase commercial cars or other
          vehicles. Whether it is a bus, truck, tanker, or light commercial car
          that you mean to employ as a taxi, commercial vehicles are a vital
          element of our economy today. From goods deliveries to daily commutes,
          commercial vehicles facilitate ease and convenience for a lot of
          sectors. Business owners who are just setting up or are planning to
          expand their operations generally put in a lot of thought into
          researching the specifications, features, maintenance costs, etc. of
          different commercial vehicles, so they can make an informed purchase
          decision that is beneficial in the long term. Although several vehicle
          manufacturers offer in-house facilities for finance, you will find
          that these options often do not have much room for customisation. For
          being able to choose low commercial vehicle loan interest rates or
          flexible payment and tenure options, one should ideally put in their
          own research to look around for the right types of commercial vehicle
          loans. Another instance where you will need to put in some effort to
          find the best option is when you need to avail a loan for a used
          commercial vehicle. There is no manufacturer directly involved here
          and you cannot depend on the availability of default loan options
          either.
        </p>
        <h1>DOCUMENTATION FOR A COMMERCIAL LOAN</h1>
        <p>
          If you are applying for a commercial loan, documentation will mainly
          include:
        </p>
        <ul>
          <li>Filled application form with photograph</li>
          <li>2 passport-size photographs</li>
          <li>A cheque for the processing fee</li>
          <li>KYC documents</li>
          <li>Income proof</li>
        </ul>
        <h1>KYC DOCUMENTS</h1>
        <ul>
          <li>
            Age proof (any one of these): Aadhaar card, PAN card, voter’s ID,
            passport, driving license.
          </li>
          <li>
            ID proof (any one of these): Aadhaar card, voter’s ID, passport,
            driving license.
          </li>
          <li>
            Proof of residence (any one of these): Rent agreement, passport,
            voter’s ID, ration card, utility bill, sales tax certificate, trade
            license.
          </li>
          <li>
            For signature verification (any one of these): Driving license, PAN
            card, government ID card (for govt. employees), registered sale
            deed.
          </li>
        </ul>
        <h1>
          SOME IMPORTANT ASPECTS OF COMMERCIAL VEHICLE FINANCE THAT YOU SHOULD
          KNOW ABOUT
        </h1>
        <ul>
          <li>
            <strong>Your Credit History:</strong> Unlike most loans, commercial
            loans do not require a credit score and history check for the
            applicants.
          </li>
          <li>
            <strong>Processing Charges:</strong> Lenders charge a small
            non-refundable amount as a processing fee for the loan. This fee can
            range from 2% to 4% of the amount applied for.
          </li>
          <li>
            <strong>Loan Margin:</strong> Applicants can get financing for up to
            100% of the vehicle’s chassis. The loan amount that is approved
            however depends on the applicant’s profile.
          </li>
          <li class="bli">
            <strong>Prepayment:</strong> Part-prepayment is generally not
            allowed but after a pre-determined time period has passed (generally
            6 – 12 months), borrowers may be allowed to repay the loan, with a
            prepayment penalty applied on the remaining amount. The exact policy
            for prepayment will vary with different lenders.
          </li>
          <li>
            <strong>Collateral:</strong> In most cases, commercial loans do not
            require security or collateral, as the vehicle bought using the loan
            is hypothecated to the lender till the loan has been repaid.
            However, based on the applicant’s profile, a guarantor or
            co-applicant may be needed.
          </li>
          <li>
            <strong> Resale:</strong> Until the entire loan has been repaid,
            borrowers will not be able to sell the vehicle in question. After
            clearing the outstanding amount, a No Objection Certificate (NOC) is
            issued by the lender and the vehicle can be sold only after it has
            been received.
          </li>
          <li>
            <strong>Tenure:</strong> Commercial loans can be taken for a tenure
            ranging from 1 to 5 years. Applicants have the freedom to choose a
            tenure based on their repayment capabilities.
          </li>
          <li>
            <strong> Low Interest Rates:</strong> If the profile of an applicant
            matches the eligibility criteria put forth by the lender perfectly,
            they will be able to avail lower interest rates.
          </li>
        </ul>
      </div>
    </div>
    <aside>
      <h1 id="related">Related blogs</h1>
      <div className="otherblogs">
        <div className="el">
          <a href="b1.html">
            <img
              src={im1}
              alt="used-cars"
              width="200px"
              height="200px"
            />
            <p className="other">All you need to know about used car loan</p>
          </a>
          <a href="b2.html">
            <img
              src={im2}
              alt="used-cars"
              width="200px"
              height="200px"
            />
            <p className="other">How to get a car loan with bad credit score</p>
          </a>
          <a href="b3.html">
            <img
              src={im4}
              alt="used-cars"
              width="200px"
              height="200px"
            />
            <p className="other">
              Can I get a car loan without having an ITR in india
            </p>
          </a>
        </div>
      </div>
    </aside>
        </div>
    );
}



export default B4;