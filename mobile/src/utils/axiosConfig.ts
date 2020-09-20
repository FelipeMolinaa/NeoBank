import Axios from "axios";

export default Axios.create({
    baseURL: 'http://192.168.15.192:3333'
})