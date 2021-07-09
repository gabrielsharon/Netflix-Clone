import axios from "axios";
import {baseurl} from './Constants/constants'
const instance = axios.create({
    baseURL: baseurl, 
  }); 

  export default instance