import React, {Fragment} from 'react'
import PropTypes from 'prop-types'


const colors = ["purple", "blue", "green"]




const Method = ({attrs, paths, objAttr}) => {


     const attributes = attrs.map(attr => (
         <div key={attr.id}className="my-4">
             {attr.attr !== "id" && (
            <div className="mb-4 border-t w-full"></div>
             )}
            <h4 className="font-bold"> {attr.attr} <span className="text-xs font-medium text-red-600">{attr._obj}</span></h4>
            <p>{attr.text}</p>
        </div>
     ))

     const path = paths.map( path => (

         <tr className="text-sm " key={path.id}>
            <th className={`px-4 pb-2 align-top text-right text-${colors[path.id]}-600`}
            
            
            >{path.method}</th>
            <td className="px-6 pb-2 tracking-widest">{path.route}</td>
        </tr>
     ))

     const objAttrs = objAttr.map(el => (
         <Fragment>
             <h3 key={el.id} className="pl-8"> {el.output}</h3>
         </Fragment>
    ))

    return (
        <Fragment> 
            <section className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <h1 className="text-2xl pb-1"> Sneakers</h1>
                    
                    <p className="text-base">This is an object representing the snkrs curated collection. You add and update items in the collection if there is something is misrepresented or not avaliable in the collection but should be</p>
                </div>
            
                <div className="bg-gray-700 text-gray-200 rounded-lg mt-4 min-h-6 text-sm md:w-1/2 md:ml-6">
                    <div className="bg-gray-800 rounded-t-lg p-2 pl-4 "> 
                        <h1 className=""> Endpoints</h1>
                    </div>

                    <table>
                        <tbody>
                        {path}
                        </tbody>
                    </table>
                
                </div>
            </section>

            <div className="mt-10 border-t w-full md:w-1/2"></div>


            <section className="flex flex-col md:flex-row">

                <div className="mt-6 md:w-1/2 ">
                    <h1 className="font-mono">THE SNKR OBJECT</h1>

                    <h5 className="mt-8"> ATTRIBUTES</h5>
                    <div className="mt-2 border-t w-full"></div>
                    <div>
                        {attributes}
                    </div>

                </div>


                <div className="bg-gray-700 text-gray-200 rounded-lg mt-10 min-h-6 text-sm md:w-1/2 md:ml-6 md:h-64">
                    <div className="bg-gray-800 rounded-t-lg p-2 pl-4 "> 
                        <h1 className=""> THE SNKR OBJECT</h1>
                    </div>

                    <div className="leading-relaxed text-sm">
                        <span className="pl-4">&#123;</span>
                        {objAttrs}
                        <span className="pl-4">&#125;</span>
                    </div>

                </div>
            </section>


        </Fragment>
       
        
    )
}

Method.propTypes = {
    data: PropTypes.array.isRequired,
    paths: PropTypes.array.isRequired,
    objAttr: PropTypes.array.isRequired
}

export default Method

