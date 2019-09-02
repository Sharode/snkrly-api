const axios = require('axios')

export const addSnkr = async (formData) => {
    try {

        await axios.post("/api/test/snkrs", formData);

        console.log(formData)
    } catch (err) {
        console.log(err)
    }

}
export const getSnkr = async () => {
    try {

        await axios.get("/api/test/snkrs");

        console.log('retrieved')
    } catch (err) {
        console.log(err)
    }

}