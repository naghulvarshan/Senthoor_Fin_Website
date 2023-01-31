import {React} from 'react';

import './b1style.css';

import im1 from "./image-1.jpg";
import im2 from "./image-2.jpg";
import im3 from './image-3.jpg';
import im4 from './image-4.jpg';


const B1=()=>{

    return(
        <div>
            <header>
      <div className="banner">
        <img src={im2} alt="banner" className="i" width="50%" height="auto" />
      </div>
    </header>
    <div className="container">
      <div id="content">
        <h1 className='h1'>ALL YOU NEED TO KNOW ABOUT USED CAR LOAN</h1>
        <p className='p'>
          The used car market in India has developed beyond recognition in the
          last few years, making second-hand cars a viable option for many
          people. Whether one wants a car to practice their driving skills on,
          is looking for a second car for their family, or if one just doesn’t
          have the budget to purchase a new car – there are many reasons why one
          may want to purchase preowned cars. Buying a used car has become more
          streamlined than ever, and unlike earlier, if one plans to buy a used
          car, they are no longer required to pay a lump sum amount for the
          purchase, as they can opt for a used car loan with ease to finance
          their second-hand car. Buying a preowned car is not only an affordable
          alternative to buying new cars, but it also comes with the convenience
          of travelling in a four-wheeler and allows you to save some money on
          the market price, depreciation, and even the insurance for the car.
        </p>
        <p className='p'>
          If you too plan to buy a second-hand car, here’s all you need to know
          about getting a used car loan.
        </p>
        <h1 className='h1'>WHAT IS A USED CAR LOAN?</h1>
        <p className='p'>
          A used or second-hand car loan offers car buyers financial assistance
          for the purchase of a second-hand car. Rather than having to collect
          the full amount required for a second hand, people can take the
          assistance of an NBFC or bank to finance the value of the car in the
          form of a loan, which they can repay over a fixed period of time. The
          interest rates on a preowned car loan are used to calculate the amount
          that a borrower will be required to pay back in total over the loan
          tenure. While most types of used vehicles can be financed, different
          banks may have different criteria, like the maximum age of the car,
          whether it is imported, etc., that you may have to meet for your loan
          application to be approved. Some types of cars or the condition they
          are in may attract higher interest rates on car loans for their
          purchase
        </p>
        <h1 className='h1'>UNDERSTANDING INTEREST RATES ON USED CAR LOANS</h1>
        <p className='p'>
          The interest rates for a used car loan may vary from lender to lender
          and are used to calculate the amount of money that the lender is
          charging for a used car loan. There are basically two types of
          interest rates for used car loans – fixed and floating interest rates.
          Whereas the applicable interest rate remains constant throughout the
          loan tenure when you opt for the fixed rate, floating interest rates
          change with market fluctuations. Fixed interest rates on car loans are
          generally higher than floating rates, but the rate that is offered
          also depends on various other factors like the age and credit score of
          the borrower, the amount of money being borrowed, the loan tenure
          chosen, etc.
        </p>
        <h1 className='h1'>BENEFITS OF APPLYING FOR A SECOND-HAND CAR LOAN</h1>
        <div className='ngdiv'>
        <ul>
          <li>
            Used cars cost less than new cars, so you can apply for a smaller
            amount as a loan.
          </li>
          <li>It is easy to get even 95-100% of the car’s value financed.</li>
          <li>
            With minimal documentation and competitive interest rates, a used
            car loan that suits your requirements is easy to find and avail.
          </li>
          <li>Minimal documentation, quick approvals, and quick disbursals.</li>
          <li>
            With numerous options available online, it is easy to find the best
            features, offers, and interest rates for a used car loan.
          </li>
        </ul>
        </div>
      </div>
    </div>
    <div>
      <h1 id="related">Related blogs</h1>
      <div className="otherblogs">
        <div className="el">
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
              src={im3}
              alt="used-cars"
              width="200px"
              height="200px"
            />
            <p className="other">
              Can I get a car loan without having an ITR in india
            </p>
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
    </div>

        </div>
    );
}


export default B1;