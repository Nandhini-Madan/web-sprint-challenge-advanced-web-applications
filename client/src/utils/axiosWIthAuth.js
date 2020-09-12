import axios from "axios";

export const axiosWithAuth =()=>{
    //Getting token value from Local Storage
    const token= localStorage.getItem("token");
    return axios.create({
        baseURL:"http://localhost:5000",
        headers:{
            Authorization:token
        }
    });
};