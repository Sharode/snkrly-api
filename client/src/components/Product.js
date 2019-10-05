import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import { addSnkr, getSnkr } from '../utils/methods'

import PropTypes from 'prop-types'
import { Collection } from 'mongoose';

const Product = () => {

    const [data, setData] = useState()

    const [formData, setFormData] = useState({
        name: "",
        tech: "",
        brand: "",
        colorway: [],
        retro: false,
        releaseDate: '',
    })

    const {
        name,
        tech,
        colorway,
        retro,
        releaseDate,
        brand
    } = formData


    const colorConvert = (formData) => {
        let colors = colorway.split(',').map(item => (item = item.trim()))
        setFormData({
            ...formData,
            colorway: [...colors]
        })

    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)

        // colorConvert()
        console.log(formData)


        // addSnkr(formData);

    };

    const fetchData = async () => {
        const { data: snkrs } = await await axios("/api/test/snkrs");
        setData(snkrs.slice(-2));
        // .slice(0, 2)
    };

    useEffect(() => {
        fetchData();
    }, [onSubmit])



    const onChange = e => {
        let colors;
        if (e.target.name === colorway) {
            colors = colorway.split(',').map(item => (item = item.trim()))
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    return (
        <div className="flex flex-col md:flex-row" >
            <div className="md:w-1/3" >
                <h2 className="text-center text-xl md:text-2xl font-bold" > Sandbox
        for Snkrly.Test it out.A new card will appear </h2> <form className="w-full max-w-lg mx-auto my-4"
                    onSubmit={
                        e => onSubmit(e)
                    } >

                    <div className="flex flex-wrap mx-3 mb-6" >
                        <div className="w-full px-3" >
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                Brand </label> <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name="brand"
                                    type="text"
                                    value={
                                        brand
                                    }
                                    onChange={
                                        e => onChange(e)
                                    }
                                    placeholder="Name of Brand... Nike, Puma, Adidas" />
                        </div> <div className="w-full px-3" >
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                Name </label> <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name="name"
                                    type="text"
                                    value={
                                        name
                                    }
                                    onChange={
                                        e => onChange(e)
                                    }
                                    placeholder="Name of sneaker" />
                        </div> <div className="w-full px-3" >
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                Technology </label> <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name="tech"
                                    type="text"
                                    value={
                                        tech
                                    }
                                    onChange={
                                        e => onChange(e)
                                    }
                                    placeholder="What material is the sole made of" />
                        </div> <div className="w-full px-3" >
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                Colorway </label> <
                                input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="colorway"
                                type="text"
                                value={
                                    colorway
                                }
                                onChange={
                                    e => onChange(e)
                                }
                                placeholder="seperate each color by a space" />
                        </div>
                        < div className="py- 5 flex mx-3 mb-2 w-full md:justify-around " >
                            <div className="w-full mb-6 md:mb-0" >
                                < label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                    Release Date </label> <
                                    input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="date"
                                    name="releaseDate"
                                    value={
                                        releaseDate
                                    }
                                    onChange={
                                        e => onChange(e)
                                    }
                                /> </div>

                        </div> <div className="w-full flex flex-row px-3" >
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                                Retro </label>

                            <input className="mr-2 ml-4 leading-tight"
                                type="checkbox"
                                name="retro"
                                value={
                                    retro
                                }
                                onChange={
                                    e => {
                                        setFormData({
                                            ...formData,
                                            retro: !retro
                                        });
                                        onChange(e);
                                    }
                                }
                            />

                        </div> <div className="w-full px-3" >
                            <button className="bg-gray-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit" >
                                Add Snkr </button> </div>

                    </div>


                </form> </div>


            <div className="flex flex-col md:w-2/3 md:flex-wrap" >
                <div className="md:w-full" >
                    <h1 className="text-center text-xl md:text-2xl font-bold w-full h-1" > Sample of sneakers in the collection </h1>

                </div>

                <div className="md:w-full md:flex-row md:flex " >
                    <
                        Card data={
                            data
                        }
                    /> </div>

            </div>


        </div>

    )
}

Product.propTypes = {

}

export default Product