import axios from 'axios';

const instance = axios.create({
      baseUrl:'https://react-my-burger-335c8-default-rtdb.firebaseio.com/'
});

export default instance;