import axios from 'axios'

const Service = {
    get(url) {
        url += `api_key=${process.env.REACT_APP_API_KEY}`
        return axios.get(url)
    },

    post(url, data) {
        
    },

    put(url, data) {
        
    },

    delete(url) {
        
    }  
}

export default Service;