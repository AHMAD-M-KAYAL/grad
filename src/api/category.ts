import axios from "axios"

 
 
const category = () => {
    return axios.get("https://sahab.ghinashop.net/api/categories").then(
        res=>res.data
    )
 }

export default category