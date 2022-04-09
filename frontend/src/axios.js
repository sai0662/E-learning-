import axios  from "axios";

const instance=axios.create({
    baseURL:"https://aao-e-learning.herokuapp.com/ursacaps/api"
})
export default instance;