import React,{useState} from 'react'
import './login.css'
// import office from '../../assets/office.jpg'
import { Link } from 'react-router-dom';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();    
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
