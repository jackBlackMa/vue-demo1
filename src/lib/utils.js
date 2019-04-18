import axios from 'axios';

const Util = {
    imgPath: 'http://localhost:8089/img/',
    apiPath: 'http://localhost:10002/'
}

Util.ajax = axios.create({
    baseURL: Util.apiPath,
})

Util.ajax.interceptors.response.use(res => {
    return res.data
})

export default Util;