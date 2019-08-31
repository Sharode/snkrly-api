import React from 'react'
import {Link} from 'react-router-dom'
// import './Landing.css'
// import logo from '../images/j1.svg'
import PropTypes from 'prop-types'

const Landing = props => {
    return (
        <div className="px-6 bg-white text-gray-800 h-screen md:px-48" >
            <h1 className="text-center text-xl pt-8"> The Open Source Sneaker API</h1>
            <p className="text-lg mt-4 pt-4"> We're building an ecosystem for sneakerheads, sneaker enthusiast and casual sneaker wearers to find a sorts of sneakers.</p>
            <p className="text-lg my-2 py-2"> It is easy to contribute.</p>

            <div className="flex flex-row inline justify-between md:justify-around">
                <Link class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ml-10 border border-gray-400 rounded shadow" to="/developer">
                View Docs
                </Link>
                <Link class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mr-10 border border-gray-400 rounded shadow" to="/">
                View Product
                </Link>
            </div>

        </div>
    )
}

Landing.propTypes = {

}

export default Landing
