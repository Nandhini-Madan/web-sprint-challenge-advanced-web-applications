import axiosWithAuth from "../utils/axiosWithAuth";

export default ()=>{ return axiosWithAuth.get("http://localhost:5000/api/colors").then(({data: colors})=>{
    return colors;
})};