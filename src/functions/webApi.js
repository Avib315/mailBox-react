import axios from "axios";
const URL = "http://localhost:3001"
const testConnection = async () => {
axios.get(URL+"/user/email").then(data=>{console.log(data)})
}
export {testConnection}