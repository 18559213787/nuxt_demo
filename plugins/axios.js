import axios from 'axios'
 
const options = {
  baseURL: 'http://localhost:6001',
  timeout: 2000
}

export default axios.create(options)