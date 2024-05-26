import axios from "axios"

export const getRequest = async () =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res;
}

export const postRequest = async (data) =>{
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts/', data);
    return res;
}