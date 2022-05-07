import axios from "axios";

const instance =axios.create({
    baseURL:"https://glewedtv.com/index.php?api/getmovie"
})

export default instance;