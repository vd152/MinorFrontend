import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
// if (getToken) {
//   axios.defaults.headers.common["Authorization"] = getToken();
// } 
// else if(getAuthToken){
//   axios.defaults.headers.common["Authorization"] = getAuthToken();
// }
// else {
//   delete axios.defaults.headers.common["Authorization"];
// }
export default axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Accept: "applications/json",
    },
});
