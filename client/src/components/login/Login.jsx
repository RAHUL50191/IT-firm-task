import React,{useState} from 'react'
import './login.css'
import axios from"axios"
import { CLIENT,SERVER } from '../../config';
import { Link } from 'react-router-dom';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
    axios.post(SERVER+'/user/login', {
      name: username,
      password: password
    },
    {
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' ,
      // You might need to adjust this based on your server's CORS configuration
    }}
    ).then(function(response){
      console.log(response.data)
      if(response.data===CLIENT+"/user/dashboard"){
        window.location=response.data;
      }
    });}
    catch{
      window.location='/'
    }   
    setUsername('');
    setPassword('');
  };
  return (
    <section className='login'>
     
    <div className='login-container'>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      <br></br>
      <li>or <Link to="/signup">signup</Link></li>
    </div>
    </section>
  )
}
