import axios from "axios";
import TokenService from "./TokenService";

class MealTypeService{

    getAllMealTypes(){
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/mealType/getAllMealTypes");
    }
    createMealType(fd){
        TokenService.setTokenInHeader();
        return axios.post("https://food-ordering-app-6u2x.onrender.com/api/mealType/createMealType", fd);
    }

    deleteMealType(mealTypeId){
        TokenService.setTokenInHeader();
        return axios.put("https://food-ordering-app-6u2x.onrender.com/api/mealType/deleteMealType/" + mealTypeId);
    }

    updateMealType(mealType){
        TokenService.setTokenInHeader();
        return axios.put("https://food-ordering-app-6u2x.onrender.com/api/mealType/updateMealType", mealType);
    }

}

export default new MealTypeService();