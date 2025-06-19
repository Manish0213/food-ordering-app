import axios from "axios";
import TokenService from "./TokenService";


class UserService{

    getAllEmployees () {
        TokenService.setTokenInHeader();
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/getAllEmployees`);
    }

    getAllUsers(){
        TokenService.setTokenInHeader();
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/getAllUsers`);
    }

    createEmployee(user){
        TokenService.setTokenInHeader();
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/user/createEmployee`, user);
    }

    getEmployeeById(employeeId){
        TokenService.setTokenInHeader();
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/` + employeeId);
    }
    
    updateEmployee(employeeId, employee){
        TokenService.setTokenInHeader();
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/user/updateUserByIdAndDetails/` + employeeId, employee);
    }
   
    deleteEmployee(employeeId){
        TokenService.setTokenInHeader();
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/user/deactivateUser/` + employeeId);
    }

    registration(user){
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/user/registration`, user);
    }

    getCurrentUser(){
        TokenService.setTokenInHeader();
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/getCurrentUser`);
    }

    updateUser(user){
        TokenService.setTokenInHeader();
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/user/updateUser`, user);
    }

    changePassword(passwordObj){
        TokenService.setTokenInHeader();
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/user/changePassword`, passwordObj);
    }

}

export default new UserService();