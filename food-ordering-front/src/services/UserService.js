import axios from "axios";
import TokenService from "./TokenService";


class UserService{

    getAllEmployees () {
        TokenService.setTokenInHeader();
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/user/getAllEmployees");
    }

    getAllUsers(){
        TokenService.setTokenInHeader();
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/user/getAllUsers");
    }

    createEmployee(user){
        TokenService.setTokenInHeader();
        return axios.post("https://food-ordering-app-6u2x.onrender.com/api/user/createEmployee", user);
    }

    getEmployeeById(employeeId){
        TokenService.setTokenInHeader();
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/user/" + employeeId);
    }
    //moze i samo employee da se salje, ne mora i id
    updateEmployee(employeeId, employee){
        TokenService.setTokenInHeader();
        return axios.put("https://food-ordering-app-6u2x.onrender.com/api/user/updateUserByIdAndDetails/" + employeeId, employee);
    }
    //logicko brisanje, setuje se isDeleted na true
    deleteEmployee(employeeId){
        TokenService.setTokenInHeader();
        return axios.put("https://food-ordering-app-6u2x.onrender.com/api/user/deactivateUser/" + employeeId);
    }

    registration(user){
        return axios.post("https://food-ordering-app-6u2x.onrender.com/api/user/registration", user);
    }

    getCurrentUser(){
        TokenService.setTokenInHeader();
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/user/getCurrentUser");
    }

    updateUser(user){
        TokenService.setTokenInHeader();
        return axios.put("https://food-ordering-app-6u2x.onrender.com/api/user/updateUser", user);
    }

    changePassword(passwordObj){
        TokenService.setTokenInHeader();
        return axios.put("https://food-ordering-app-6u2x.onrender.com/api/user/changePassword", passwordObj);
    }

}

export default new UserService();