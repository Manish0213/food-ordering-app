import axios from "axios";
import TokenService from "./TokenService";

class LoginService{
    login(loginParams){
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/login`, loginParams);
    }

    logout(){
        TokenService.setTokenInHeader();
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/logout`);
    }
}

export default new LoginService();