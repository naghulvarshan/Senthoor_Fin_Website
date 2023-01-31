import {React, useState}  from 'react';

import './Card.css';

const Newcard=(props)=>{

    const[on_disp,update_on_disp]=useState(true);


    const on_disp_handler=()=>{

        if(on_disp==true){
            update_on_disp(false);
        }else{
            update_on_disp(true);
                }
        
    }


    const update=(event)=>{
        on_disp_handler();
        event.preventDefault();
        props.update_value(event.target);
        event.target.name.value="";
        event.target.id.value="";
        event.target.city.value="";
        event.target.email.value="";
        event.target.phno.value="";
        event.target.amount.value="";
        event.target.interest.value="";
        event.target.vehicle_no.value="";
        event.target.monthly_pay.value="";
    }

    return(
        <div className='outer'>
            <img src=""></img>
            <div className='inner-div'>

                {on_disp && ( <div className='plus' onClick={()=>{
                    on_disp_handler();
                    
                    }}>
                    <h1>+</h1>
                </div>)}    
                {!on_disp && (<div className='input-values'>
                    <form onSubmit={update}>
                        <label>Name</label>
                        <input type='text'  name='name'></input>
                        <label>ID</label>
                        <input type='text' name='id'></input>
                        <label>Phone</label>
                        <input type='text' name='phno'></input>
                        <label>Email</label>
                        <input type='text'  name='email'></input>
                        <label>Amount</label>
                        <input type='text'  name='amount'></input>
                        <label>Monthly pay</label>
                        <input type='text'  name='monthly_pay'></input>
                        <label>Interest</label>
                        <input type='text' name='interest'></input>
                        <label>city</label>
                        <input type='text' name='city'></input>
                        <label>vehicle_no</label>
                        <input type='text' name='vehicle_no'></input>
                        <input type='submit'  value='ADD'></input>
                    </form>

                </div>)}                         
                 
                
            </div>
        </div>
    );
}

export  default Newcard;