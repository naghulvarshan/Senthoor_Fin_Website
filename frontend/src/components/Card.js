import {React, useState} from 'react';

import {FaPen}  from "react-icons/fa";
import './Card.css';



// add-->reflect


const Card=(props)=>{


    const[disp,update_disp]=useState(false);

    const update_disp_handler=()=>{

        if(disp==true){
            update_disp(false);
        }else{
            update_disp(true);
        }
    }


    const [name,update_name]=useState(props.name);
    const [id,update_id]=useState(props.id);
    
    const [city,update_city]=useState(props.city);
    
    const [amount,update_amount]=useState(props.amount);
    const [interest,update_interest]=useState(props.interest);
    const [vehicle_no,update_vehicle_no]=useState(props.vehicle_no);
    const [monthly_pay,update_monthly_pay]=useState(props.monthly_pay);
    const [phno,update_phno]=useState(props.ph);
    const [email,update_email]=useState(props.email);
   

    return(
        <div className='outer'>
          {props.status=='0' && <div className='layer'></div>}
          {disp && (<div className='input-values'>
                    <form onSubmit={(event)=>{
                    event.preventDefault();    
                    props.update_info({
                        name:event.target.name.value, 
                        id:event.target.id.value, 
                        amount:event.target.amount.value,   
                        interest:event.target.interest.value, 
                        email:event.target.email.value, 
                        ph:event.target.phno.value, 
                        
                        city:event.target.city.value, 
                        
                        vehicle_no:event.target.vehicle_no.value, 
                        monthly_pay:event.target.monthly_pay.value                      
                        
                        });
                    update_disp_handler();
                    }}>
                        <label>Name</label>
                        <input type='text'  name='name' value={name} onChange={(event)=>{update_name(event.target.value);}} ></input>
                        <label>ID</label>
                        <input type='text' name='id' value={id} onChange={(event)=>{update_id(event.target.value);}}></input>
                        <label>Phone</label>
                        <input type='text' name='phno' value={phno} onChange={(event)=>{update_phno(event.target.value);}}></input>
                        <label>Email</label>
                        <input type='text'  name='email' value={email} onChange={(event)=>{update_email(event.target.value);}}></input>
                        <label>Amount</label>
                        <input type='text'  name='amount' value={amount} onChange={(event)=>{update_amount(event.target.value);}}></input>
                        <label>Monthly pay</label>
                        <input type='text'  name='monthly_pay' value={monthly_pay} onChange={(event)=>{update_monthly_pay(event.target.value);}}></input>
                        <label>Interest</label>
                        <input type='text' name='interest' value={interest} onChange={(event)=>{update_interest(event.target.value);}}></input>
                        
                        <label>city</label>
                        <input type='text' name='city' value={city} onChange={(event)=>{update_city(event.target.value);}}></input>
                        
                        <label>Vehicle number</label>
                        <input type='text' name='vehicle_no' value={vehicle_no} onChange={(event)=>{update_vehicle_no(event.target.value);}}></input>
                        <input type='submit'  value='ADD'></input>
                    </form>

                </div>)} 
          {!disp && <FaPen className='edit' onClick={update_disp_handler}/>}
          {!disp && <img src="https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg?auto=webp"></img>}  
          {!disp &&  <div className='inner-div'>
                                   
                                   <p>Name&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;:{props.name}</p>
                                               
                                   <p>ID&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;:{props.id}</p>
                                              
                                   <p>amount&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;:{props.amount}</p>
                                                  
                                   <p>interest&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;:{props.interest}</p>
                                   <p>monthly pay&emsp;&emsp;&nbsp;&nbsp;:{props.monthly_pay}</p>
                                   <p>Email&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;:{props.email}</p>
                                   <p>vehicle number&emsp;:{props.vehicle_no}</p>
                                   <p>Phone&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;:{props.ph}</p>
                                   
                                   <p>City&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;:{props.city}</p>
                                   
                                   <button className='btn' onClick={()=>{props.change_pay(props.id)}}>paid</button>
                               
               
                           </div>}  
           
        </div>
    );
}


export default Card;