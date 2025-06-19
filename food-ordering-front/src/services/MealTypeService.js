import axios from "axios";
import TokenService from "./TokenService";

class MealTypeService{

    getAllMealTypes(){
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/mealType/getAllMealTypes`);
    }
    createMealType(fd){
        TokenService.setTokenInHeader();
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/mealType/createMealType`, fd);
    }

    deleteMealType(mealTypeId){
        TokenService.setTokenInHeader();
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/mealType/deleteMealType/` + mealTypeId);
    }

    updateMealType(fd){
        TokenService.setTokenInHeader();
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/mealType/updateMealType`, fd);
    }

}

export default new MealTypeService();