import axios from "axios";

const axiosWithAuth = axios.create({headers: {Authorization: localStorage.getItem("token")}});

export default axiosWithAuth;