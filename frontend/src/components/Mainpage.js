import {React,useEffect, useState} from 'react';
import axios from 'axios';


import Card from './Card';
import Newcard from './Newcard';
import './Mainpage.css';



const Mainpage=()=>{

    

    const [list,update_list]=useState([]);


    


    const new_card=async(d)=>{
       //console.log(d.name.value);
       
        const temp={
            col2:d.name.value,
            col1:d.id.value,
            col3:d.amount.value,  
            col4:d.interest.value,
            col5:d.email.value,
            col6:d.phno.value,
            col7:d.city.value,
            col8:d.vehicle_no.value,
            col9:d.monthly_pay.value,
        }


        const result2=await axios.post('http://localhost:3001/student/add',{
           "col1":d.id.value, 
           "col2":d.name.value,
           "col3":d.amount.value,
           "col4":d.interest.value,
           "col5":d.email.value,
           "col6":d.phno.value,
           "col7":d.city.value,
           "col8":d.vehicle_no.value,
           "col9":d.monthly_pay.value,
           "col10":'1'
       
        });
        update_list([...list,temp]);
        // console.log(list);
    }


    useEffect(async()=>{


        const result=await axios.post('http://localhost:3001/student/fetch',{});
       // console.log(result.data);
        update_list(result.data.result);

    },[])


    const update_user=async(d)=>{

        const result2=await axios.post('http://localhost:3001/student/update',{
           "col1":d.id, 
           "col2":d.name,
           "col3":d.amount,
           "col4":d.interest,
           "col5":d.email,
           "col6":d.ph,
           "col7":d.city,
           "col8":d.vehicle_no,
           "col9":d.monthly_pay,
           "col10":d.status
       
        });


        const result=await axios.post('http://localhost:3001/student/fetch',{});
        // console.log(result.data);
         update_list(result.data.result);

      

    }




    const update_pay=async(id)=>{

        const result2=await axios.post('http://localhost:3001/student/update',{
            "col1":id,                   
            "col10":"0",
        });

        const result=await axios.post('http://localhost:3001/student/fetch',{});
        // console.log(result.data);
         update_list(result.data.result);

    }

    

    const Sort=(i)=>{


        if(i==1){            
                //ascending order based on monthly pay
                list.sort((a,b)=>{                    
                        return parseInt(a.col9)-parseInt(b.col9);
                });

                update_list([...list]);

        }else if(i==2){
                //order based on name
                 list.sort((a,b)=>{
                    
                      if ( a.col2 < b.col2 ){
                        return -1;
                      }
                      if ( a.col2 > b.col2){
                        return 1;
                      }
                      return 0;
                 });
                 update_list([...list]);

        }else if(i==3){
                //order based on status
                 list.sort((a,b)=>{
                    
                        return parseInt(b.col10)-parseInt(a.col10);
                });
                update_list([...list]);
        }else if(i==4){

                //order based on city ascending
                list.sort((a,b)=>{
                        
                        if ( a.col7 < b.col7 ){
                        return -1;
                        }
                        if ( a.col7 > b.col7){
                        return 1;
                        }
                        return 0;
                });
                update_list([...list]);

        }else{
            update_list([...list]);
        }



    }    

    const temp=list.map((d)=>{

        return  <Card
        name={d.col2} 
        id={d.col1}
        amount={d.col3}  
        interest={d.col4}
        email={d.col5}
        ph={d.col6}
        city={d.col7}
        vehicle_no={d.col8}
        monthly_pay={d.col9}
        status={d.col10}
        change_pay={update_pay}
        update_info={update_user}
        
        >
        </Card>;
    });


   

    


  
    return(
        <div className='oo'>
          
            <select name="sort" className='sel' onChange={(event)=>{Sort(event.target.value)}}>
                <option value={0}></option>
                <option value={1}>monthly pay</option>
                <option value={2}>name</option>
                <option value={3}>status</option>
                <option value={4}>city</option>
            </select>

            <div className='wrapper'>
              <Newcard  add_new={new_card}  update_value={new_card}  ></Newcard>
              {temp}            
            </div>
            <div className='footer'>
                <p>Copyright © 2022 Senthoor motor finance. All rights reserved.</p>
                <p>Developed by Fullstack Slayers </p>
            </div>

        </div>
        
    )

}



export default Mainpage;
