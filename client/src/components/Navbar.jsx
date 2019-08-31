import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div className="bg-white text-gray-800 ">
            <ul className="flex justify-end text-lg">
                <li className="p-4" >
                    <Link to="/"> Home</Link>
                </li>
                <li className="p-4">
                    <Link to="/developer"> Docs</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar
