import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const HttpTable = ({data}) => {

    const output = data.map( info => (
        <tr className="text-sm" key={info._id}>
            <th className="px-4 pb-4 align-top text-right ">{info.status}</th>
            <td className="px-6 pb-4">{info.response}</td>
        </tr>
    ))
    
    return (
        <Fragment>
            <div className=" bg-gray-700 text-gray-200 rounded-lg mt-4 min-h-6 text-sm"> 
                <div className="bg-gray-800 rounded-t-lg p-2 pl-4">
                    <h1 className="pl-4"> HTTP Summary Code Summary</h1>
                </div>
            
                    <table className="" >
                        <tbody >
                            {output}
                        </tbody>
                    </table>
                    
               
            </div>
        </Fragment>

    )
}

HttpTable.propTypes = {

}

export default HttpTable
