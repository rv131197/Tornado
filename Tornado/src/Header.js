import {LOGO_URL} from '../utilities/constants'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <ol>Home</ol>
                    <ol>About</ol>
                    <ol>Cart</ol>
                </ul>
            </div>
        </div>
    )
}

export default Header;