import campusbuild from '../img/campusbuild.png'
import * as MUI from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'

//signup page
const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState(1);
    const navigate = useNavigate();
    localStorage.setItem('taskslength', 0)

    const handleSubmit = (e) => {
        e.preventDefault();
        setId(id+1)
        const user = {username, email, password}
        localStorage.setItem(id, JSON.stringify(user))
        navigate("/login")
    }

    return(
        <>
        <img className='bgimg' src={campusbuild}></img>
        <form>
        <h1>Sign up!</h1>
        <label>Username</label>
        <input required placeholder='' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <label>Email</label>
        <input required placeholder='' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <label>Password</label>
        <input required type='password' placeholder='' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <MUI.FormControlLabel control={<MUI.Checkbox defaultChecked />} label="I accept the terms & conditions"/>
        <MUI.Button onClick={handleSubmit} variant='contained' size='large'>Sign Up</MUI.Button>
        <Link to='/login'>Already signed up? Login</Link>
        </form>
        </>
    )
}

export default Signup