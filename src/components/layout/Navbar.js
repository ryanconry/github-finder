import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ icon, title }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
        </nav>

    );
}

Navbar.defaultProps = {         //default props for func component
    title: 'Github Finder',
    icon: 'fas fa-github'
};

Navbar.propTypes = {            //propTypes for func component
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
