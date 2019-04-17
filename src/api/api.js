import request from './request'

const method = {get: 'GET', post: 'POST'};
const headers = { 'Accept': 'application/json, text/plain, */*' }
const apiRequest = (url,option) => {
    return request(url,option).then(({data,err}) =>{
        if(err){
            alert('系统异常，稍后重试')
            return {data,err}
        }
        const isSuccess = data.code===1;
        if(!isSuccess){
            alert(data.message)
        }
        return {...data,isSuccess}
    })
};

export default {
    fetchLogin(){
        return apiRequest(
            '/login',{
                headers,
                method: method.get,
            }
        )
    }
}