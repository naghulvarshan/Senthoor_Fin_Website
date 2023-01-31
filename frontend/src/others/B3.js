import {React} from 'react';

import './b1style.css';

import im1 from "./image-1.jpg";
import im2 from "./image-2.jpg";
import im3 from './im2.jpg';
import im4 from './image-4.jpg';

const B3=()=>{

    return(
        <div>


<header>
      <img src={im3} alt="banner" className="i" width="50%" height="auto" />
    </header>
    <div className="container">
      <div id="content">
        <h1>CAN I GET A CAR LOAN WOTHOUT HAVING ITR IN INDIA</h1>
        <p>
          Having a car used to be considered a luxury item. However, in today's
          economically growing globe, having an automobile is both a need and a
          convenience for getting from one end of the ever-expanding metropolis
          to the other. Though not everyone has enough funds to buy a car in one
          lump sum, a car loan from a lender might help you realize your
          ambition of owning a car. Getting a vehicle loan in India is very
          simple, quick and paperless. With a few clicks online or at the
          company's respected branch, you can apply for a car loan application.
          However, in order to obtain a vehicle loan and purchase a new
          automobile, the individual must have a decent credit score. Many banks
          and other financial organizations provide car loans with decent
          interest rates entirely based on the individual's credit history.
        </p>
        <h1>ELIGIBILITY FOR A CAR LOAN</h1>
        <p>
          The qualifications for a new or used car loan in India differ by the
          lender. As a result, before applying for a vehicle loan, you should
          check your eligibility. The following is the car loan eligibility for
          people who are salaried or self-employed:
        </p>
        <ul>
          <li>The applicant must be between the ages of 18 and 65.</li>
          <li>
            He or she must be a salaried or self-employed professional with at
            least two years of experience in the same industry.
          </li>
          <li>
            The applicant must have a net yearly income of at least Rs.3-4 lakh.
          </li>
          <li>
            To qualify for a low-interest rate on a vehicle loan, he or she must
            have a strong credit score of 750 or above.
          </li>
        </ul>
        <h1>WAYS OF GETTING CAR LOAN WITHOUT ITR</h1>
        <ul>
          <li>
            First things first, you need to do some research online about if the
            lender/company from which you wish to finance your car will give you
            a loan without an ITR, or income tax proof.
          </li>
          <li>
            If you do not have enough cash on hand to make a large down payment,
            you will need to have some property, FD, or gold that you can
            mortgage in order to be eligible for a vehicle loan.
          </li>
          <li>
            You must be prepared to pay a higher interest rate on your auto loan
            because it will be an unsecured loan without an ITR. However, if you
            are sure of your ability to repay, feel free to negotiate a cheaper
            vehicle loan interest rate with the lender.
          </li>
          <li>
            In order to secure a car loan without an ITR for loan eligibility,
            you'll have to pay a large portion of the car's price upfront.
          </li>
          <li>
            When your loan is accepted, make sure to thoroughly read the terms
            and conditions to avoid any further surprises.
          </li>
        </ul>
        <h1>HOW TO IMPROVE YOUR ELIGIBILITY FOR A CAR LOAN WITHOUT AN ITR?</h1>
        <p>
          If you wish to acquire a car loan without ITR and income proof you can
          improve your eligibility for the application in the following ways:
        </p>
        <ul>
          <li>
            Having a co-applicant with an ITR and an excellent credit rating can
            help you secure a car loan without an ITR.
          </li>
          <li>
            You can use a previous automobile as collateral to obtain a car loan
            to purchase a new car.
          </li>
          <li>
            You can pay a large portion of the car's purchase price upfront and
            take out a lesser loan.
          </li>
          <li>
            Examine other funding options, but stay away from unethical lenders
            in the unregulated market.
          </li>
          <li>
            It is very important to maintain a strong credit score, which you
            can achieve by paying other EMIs, loans, or any sort of dues. When
            you cannot provide an ITR, these are the important aspects that a
            lender will look at.
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
          <a href="b4.html">
            <img
              src={im4}
              alt="used-cars"
              width="200px"
              height="200px"
            />
            <p className="other">How to get a car loan with bad credit score</p>
          </a>
        </div>
      </div>
    </aside>
        </div>
    );
}



export default B3;