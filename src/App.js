import { Component } from 'react'
import Board from './componentss/Board'
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

class App extends Component{

  state={username:undefined}
 
  render(){
    const {username}=this.state
    console.log(username)
  return (
    <div className='firstCon'>
      {username===undefined?
      <div className='seccon'>
        <div className='boardCon'><h1>Board.</h1></div>
        <div className='SignInCon'>
          <div className='signsubcon'>
            <h1>Sign In</h1>
            <p>Sign in to your account</p>
            <div className='fang'>
            <GoogleLogin
     onSuccess={(credentialResponse) => {
      
    console.log(credentialResponse);
    const decoded = jwt_decode(credentialResponse.credential);  
    this.setState({username:decoded.given_name})
  }}
  />
            </div>
            <form className='formCon'>
              <label htmlFor='address'>Email Address</label>
              <input id="address" type="input" className='inpu' placeholder='Enter email'/>
              <label htmlFor='password'>Password</label>
              <input id='password' type="input" className='inpu' placeholder='Enter Password'/>
              <p style={{color:'blue'}}>Forgot Password?</p>
              <button className='butto'>Submit</button>
            </form>
            <p>Dont't have an account <span style={{color:"blue"}}>Register here?</span></p>
          </div>
        </div>
      </div>
      :<Board username={username}/>}
    </div>
  )
}
}

export default App;
