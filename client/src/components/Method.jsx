import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const Method = ({attrs, paths, obj_values}) => {
     const attributes = attrs.map(attr => (
         <Fragment>
            <div className="border-t w-full"></div>
            <h4> {attr.attr} <span>{attr._obj}</span></h4>
            <p>{attr.text}</p>
        </Fragment>
     ))

     const path = paths.map( path => (
        <Fragment key={path.id}>
            <div  className="">
                <span className="pl-4 text-right"> {path.method}</span>
                <span className="pl-4">{path.route}</span>
            </div>
        </Fragment>
     ))

     
     

    return (
        <Fragment>
            <h1 className="text-2xl text-white pb-1"> Sneakers</h1>
             
             <p className="text-base">This is an object representing the snkrs collection. You can retrieve it to see all the current snkrs.</p>

             <div className="bg-gray-700 text-gray-200 rounded-lg mt-4 min-h-6 text-sm ">
                <div className="bg-gray-800 rounded-t-lg p-2 pl-4 "> 
                    <h1 className=""> Endpoints</h1>
                </div>
               
                {path}
            </div>
            <div>
                <h1>The Snkr Object</h1>
                <div className="border-t w-full"></div>

                <h5> The Attributes</h5>

                {attributes}

            </div>
            <div className="bg-gray-700 text-gray-200 rounded-lg mt-4 min-h-6 text-sm ">
                <div className="bg-gray-800 rounded-t-lg p-2 pl-4 "> 
                    <h1 className=""> The Snkr Object</h1>
                </div>
                 <span> bracket</span>


                    put data here

                 <span> bracket</span>

            </div>
        </Fragment>
    )
}

Method.propTypes = {
    data: PropTypes.object.isRequired,
    paths: PropTypes.object.isRequired,
    obj_values: PropTypes.object.isRequired
}

export default Method

