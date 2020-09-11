import http from './http';
// 专门写details组件的请求接口
export const detailsApi = {
    getnewsList:() => http.get('/getnewslist'),
    getPagedata:(num) => http.get(`http://localhost:3001/page?page=${num}`)   
}
//专门写homepage组件的请求接口
export const homepageApi = {
    getNewsList:() =>{
        return http.get('/getnewslist');
    },
    getPagedata:(num) =>{
        return http.get(`http://localhost:3001/page?page=${num}`)
    }
}