import axios from "axios";
import {getAuthToken} from '../utils/localStorage'
import {url} from '../utils/common'
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

if(getAuthToken()){
  axios.defaults.headers.common["token"] = getAuthToken();
}
else {
  delete axios.defaults.headers.common["token"];
}
export default axios.create({
    baseURL: url,
    headers: {
      Accept: "applications/json",
    },
});
