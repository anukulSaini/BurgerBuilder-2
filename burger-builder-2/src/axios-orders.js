import axios from 'axios';
//By Anukul Saini

const instance = axios.create({
     baseURL: 'https://react-my-burger-335c8-default-rtdb.firebaseio.com/'
});

export default instance;
