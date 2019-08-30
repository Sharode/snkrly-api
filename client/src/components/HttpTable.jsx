import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const HttpTable = ({data}) => {

    const output = data.map( info => (
        <tr className="text-sm " key={info._id}>
            <th className="px-4 pb-4 align-top text-right ">{info.status}</th>
            <td className="px-6 pb-4">{info.response}</td>
        </tr>
    ))
    
    return (
        <Fragment>
            <div className=" bg-gray-700 rounded-t-lg py-2"> <h1 className="pl-4"> HTTP Summary Code Summary</h1></div>
            <div className=" pt-2 border rounded-b-lg border-gray-700">
                
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
