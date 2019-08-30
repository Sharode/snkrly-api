import React from 'react'

import PropTypes from 'prop-types'

const Navbar = props => {
    return (
        <div className="sail-gray900">
            <ul className="flex justify-end">
                <li >
                    <a href="!#"> Home</a>
                </li>
                <li className="ml-1 mr-1">
                    <a href="!#"> Docs</a>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar
