import {React, useEffect ,useState} from 'react';

import './Login.css';
import Mainpage from './Mainpage';

const Login=()=>{

    useEffect(()=>{

        const loginBtn = document.getElementById('login');
       
    
        loginBtn.addEventListener('click', (e) => {
            let parent = e.target.parentNode.parentNode;
            Array.from(e.target.parentNode.parentNode.classList).find((element) => {
            if(element !== "slide-up") {
                parent.classList.add('slide-up')
            }else{
                
                parent.classList.remove('slide-up')
            }
            });
        });

    },[]);


    const[page,update_page]=useState(false);


    useEffect(()=>{

        let username=window.localStorage.getItem('username-rvs');
        let password=window.localStorage.getItem('password-rvs');

        if(username=='user123' && password=='password'){
            update_page(true);
        }


    },[]);


    const [username,update_username]=useState('');
    const [password,update_password]=useState('');

    const sub=()=>{
       

        if(username=='user123' && password=='password'){
            update_page(true);
            window.localStorage.setItem('username-rvs',username);
            window.localStorage.setItem('password-rvs',password);
        }


       
    }   
       

    const logout=()=>{

        window.localStorage.removeItem('username-rvs');
        window.localStorage.removeItem('password-rvs');

        window.location.reload();
    }  


    return (
        <div>

            {!page && (<div className='lbody'>
            <div className="form-structor">
	<div className="signup">
		
		<div className="form-holder">
			
		</div>
		
	</div>
	<div className="login slide-up">
		<div className="center">
			<h2 className="form-title" id="login"><span>or</span>Log in</h2>
			<form className="form-holder">
				<input type="email" className="input"  name='username' onChange={(event)=>{update_username(event.target.value)}} placeholder="Email" />
				<input type="password" className="input" name='password' onChange={(event)=>{update_password(event.target.value)}} placeholder="Password" />
                
			</form>
            <button className="submit-btn" onClick={sub} >log in</button>
			
		</div>
	</div>
</div>
        </div>)}


        {page &&  <Mainpage></Mainpage>}
        {page && <button  onClick={logout} id='logout'>logout</button>}

        </div>

        
    );
}


export default Login;