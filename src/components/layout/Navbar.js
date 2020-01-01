import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>    {/* Link instead of a <a> for app links, a tags clear app state*/}
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>

    );
}

Navbar.defaultProps = {         //default props for func component
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {            //propTypes for func component
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
