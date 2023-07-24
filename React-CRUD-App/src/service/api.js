import axios from 'axios';


const url = "http://127.0.0.1:3003/user";
const url1= "http://127.0.0.1:3003/products";
const url2="http://127.0.0.1:3003/order";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const getUsername = async (username) => {
    username = username || '';
    return await axios.get(`${url}/${username}`);
}

export const getPassword = async (password) => {
    password = password || '';
    return await axios.get(`${url}/${password}`);
}

export const addUser = async (user) => {
    return await axios.post(url,user);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`,user);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

export const getallProducts = async (id) => {
    id = id || '';
    return await axios.get(`${url1}/${id}`);
}

export const addProduct = async (products) => {
    return await axios.post(url1,products);
}

export const editProduct = async (id, products) => {
    return await axios.put(`${url1}/${id}`,products);
}


export const deleteProduct = async (id) => {
    return await axios.delete(`${url1}/${id}`);
}

export const getallOrders = async (id) => {
    id = id || '';
    return await axios.get(`${url2}/${id}`);
}

export const addOrder = async (order) => {
    return await axios.post(url2,order);
}

export const deleteOrder = async (id) => {
    return await axios.delete(`${url2}/${id}`);
}