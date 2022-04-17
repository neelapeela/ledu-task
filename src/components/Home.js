import campusbuild from '../img/campusbuild.png'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Tasks from './Tasks'
import Weather from './Weather';

//home page after login
const Home = () => {
    const [profilePhoto, setProfilePhoto] = useState('')
    let a = parseInt(Math.random()*1000);
    useEffect(() => {
        axios.get(`https://picsum.photos/id/${a}/info/`)
        .then(res=> {
            setProfilePhoto(res.data.download_url)
        }).catch(error=> a=parseInt(Math.random()*1000))
    }, []);

    return(
        <div className='Home'>
        <span className='navbar'>
            <img src={campusbuild}/>
            <h1>campus.build</h1>
            <div className='right-area'>
                <div className='right-area-tab'>
                    <h1 className='user'>Hey, {JSON.parse(localStorage.getItem("loggeduser")).username}!</h1>
                    <Link to='/ledu-task'>Logout</Link>
                </div>
                <img className='randomphoto' src={profilePhoto}/>
            </div>
        </span>
        <div className='homebody'>
            <Tasks/>
            <Weather/>
        </div>
        </div>
    )
}

export default Home