import {LOGO_URL} from '../utilities/constants'
import { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
    const [btnName, setBtnName] = useState('Login')
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <ol><Link to='/'>Home</Link></ol>
                    <ol><Link to='/about'>About Us</Link></ol>
                    <ol><Link to='/contact'>Contact Us</Link></ol>
                    <ol>Cart</ol>
                    <button className='login-btn' onClick={() => {
                         btnName == 'Login' ? setBtnName('Logout') : setBtnName('Login');
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;