import React, {useState} from 'react'
import {getTable} from '../data/table'
import Method from './Method'
import Table from './HttpTable'
import { attrs, getMethod, getObj } from '../data/methods';

const Developer = () => {
    const [tableData] = useState(getTable())
    const [devData] = useState({
        attr: attrs(),
        path: getMethod(),
        objAttr: getObj()
    })


    return (
       <div className="mx-6">
         <section className="flex flex-col py-5 md:flex-row">
             <div className="md:w-1/2">
                <h1 className="text-2xl pb-1"> Snkrly Developer API</h1>
                <p className="pt-4 text-base">The Snkrly API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.</p>
                <p className="pt-4 text-base">
                You can use the Snkrly API in test mode, which does not affect the live data. The API key you use to authenticate the request determines whether the request is live mode or test mode.
                </p>
            
             </div>
        

            <div className="bg-gray-700 text-gray-200 rounded-lg mt-4 min-h-6 text-sm md:w-1/2 md:h-20 md:max-w-xs md:mt-12 md:ml-2">
                <div className="bg-gray-800 rounded-t-lg p-2 pl-4 "> 
                    <h1 className=""> Base URL</h1>
                </div>
                <div>
                    <h1 className=" p-2 pl-4">https://api.com</h1>
                </div>
            </div>
        </section>

        <section className="flex flex-col py-5 border-t mt-6 md:flex-row">
            <div className="md:w-1/2">
                <h1 className="text-2xl pt-6"> Errors</h1>
                <p className="pt-4 text-base">
                Snkrly uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the 5xx range indicate an error with Stripe's servers (these are rare).
                </p>
                <p className="pt-4 text-base">
                Some 4xx errors that could be handled programmatically (e.g., a card is declined) include an error code that briefly explains the error reported
                </p>
            </div>

            <div className="md:w-1/2 md:ml-6">
                <Table data={tableData}/>

            </div>

       
        </section>

        <section className=" border-t mt-6 py-4">
            <Method  attrs={devData.attr} paths={devData.path} objAttr={devData.objAttr}/>
        </section>
       </div>
        
    )
}

export default Developer
