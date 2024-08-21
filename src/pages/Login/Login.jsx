import './Login.css'
import assets from '../../assets/assets'
import { useState } from 'react'
import { signup, login } from '../../config/firebase';

function Login() {

    const [currState, setCurrState] = useState("Sign up");

    //3 state variable to store username, email & password
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (event)=>{
        event.preventDefault(); //to prevent the website reloading after pressing create account
        if (currState === "Sign up"){
            signup(userName,email,password);
        }
        else{
            login(email,password);
        }
    }

  return (
    <div className='login'>
        <img src={assets.logo_icon} alt="" className='logo'/>
        <form onSubmit={onSubmitHandler} className='login-form' action="">
            <h2>{currState}</h2>
            {currState === "Sign up"?<input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" className="form-input" placeholder='Username' required />: null}
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-input" placeholder='Email address' required />
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className="form-input" placeholder='Password' required />
            <button type='submit'>{currState === "Sign up"?"Create account":"Login now"}</button>
            <div className="login-term">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy.</p>
            </div>
            <div className="login-forgot">
                {
                    currState === "Sign up"
                    ?<p className="login-toggle">Already have an account <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                    :<p className="login-toggle">Create an account <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
                }
            </div>
        </form>

    </div>
  )
}

export default Login