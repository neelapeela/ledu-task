import campusbuild from '../img/campusbuild.png'
import * as MUI from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'

//login page
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {username, password}
        var registered = false;
        Object.entries(localStorage).forEach((x)=>{
            if(user.username==JSON.parse(x[1]).username && user.password==JSON.parse(x[1]).password){
                registered=true;
            }
        })
        if(registered){
            navigate('/home')
        }
        else{
            alert('No user found')
        }
        localStorage.setItem("loggeduser", JSON.stringify(user))
    }

    return(
        <>
        <img className='bgimg' src={campusbuild}></img>
        <form>
        <h1>Login</h1>
        <label>Username</label>
        <input placeholder='' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <label>Password</label>
        <input type='password' placeholder=''value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <MUI.Button onClick={handleSubmit} variant='contained' size='large'>Login</MUI.Button>
        <Link to='/'>New user? Login</Link>
        </form>
        </>
    )
}

export default Login