import axios from "axios";

const instance =axios.create({
    baseURL:"https://learning-platform-j1m7.onrender.com"
});

export default instance;