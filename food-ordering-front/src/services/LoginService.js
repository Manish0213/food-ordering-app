import axios from "axios";
import TokenService from "./TokenService";

class LoginService{
    login(loginParams){
        return axios.post("https://food-ordering-app-6u2x.onrender.com/api/login", loginParams);
    }

    logout(){
        TokenService.setTokenInHeader();
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/logout");
    }
}

export default new LoginService();