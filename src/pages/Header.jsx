import { Link, useLocation } from 'react-router-dom';
import './Header.css'
import reactLogo from '../assets/react.svg'

export default function Header() {
    const location = useLocation();
    return (
        <div>
            <nav className='topnav'>
                <ul>
                    <li>
                        <img src={reactLogo} alt="logo" />
                    </li>
                    <Link to="/">
                        <li className={location.pathname === '/' ? 'active' : ''}>Expenses</li>
                    </Link>
                    <Link to="/categories">
                        <li className={location.pathname === '/categories' ? 'active' : ''}>Categories</li>
                    </Link>
                    <Link to="/wallet">
                        <li className={location.pathname === '/wallet' ? 'active' : ''}>Wallet</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}