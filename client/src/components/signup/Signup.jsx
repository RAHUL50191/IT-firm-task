import React,{useState} from 'react'
import './signup.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SERVER } from '../../config';
export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); 
     
    if(password===cpassword){
        console.log("password match")
        axios.post(SERVER+'/user/signup', {
          name: username,
          password: password
        });  
    }   
    setUsername('');
    setPassword('');
  };
  return (
    <section className='signup'>
     
    <div className='signup-container'>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
        </div>
        <button type="submit">signup</button>
      </form>
      <br></br>
      <li>or <Link to="/login">login</Link></li>
    </div>
    </section>
  )
}
