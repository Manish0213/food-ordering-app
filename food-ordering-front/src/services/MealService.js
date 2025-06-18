import axios from "axios";
import TokenService from "./TokenService";

class MealService{

    getAllMeals(){
        TokenService.setTokenInHeader();
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/meal/getAllMeals");
    }

    createMeal(fd){
        TokenService.setTokenInHeader();
        return axios.post("https://food-ordering-app-6u2x.onrender.com/api/meal/createMeal", fd);
    }

    deleteMeal(mealId){
        TokenService.setTokenInHeader();
        return axios.put("https://food-ordering-app-6u2x.onrender.com/api/meal/deleteMeal/" + mealId);
    }

    getAllMealTypes(){
        TokenService.setTokenInHeader();
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/mealType/getAllMealTypes");
    }

    updateMeal(meal){
        TokenService.setTokenInHeader();
        return axios.put("https://food-ordering-app-6u2x.onrender.com/api/meal/updateMeal", meal);
    }

    getMealsByMealTypeId(mealTypeId){
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/meal/getMealsByMealTypeId/" + mealTypeId);
    }

    sendItemsForFinalOrder(itemsFromCartFinalOrder){
        // jedino ako je korisnik ulogovan, stavlja se token u header-u
        TokenService.setTokenInHeader();
        return axios.post("https://food-ordering-app-6u2x.onrender.com/api/finalOrder/createFinalOrder", itemsFromCartFinalOrder); 
    }

    getFinalOrderById(finalOrderId){
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/finalOrder/getFinalOrderById/" + finalOrderId);
    }

    getOrderItemsByFinalOrderId(finalOrderId){
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/finalOrder/getOrderItemsByFinalOrderId/" + finalOrderId);
    }

    getAllActiveFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/finalOrder/getAllActiveFinalOrders");
    }
    
    getAllDeliveredFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/finalOrder/getAllDeliveredFinalOrders");
    }

    getMyActiveFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/finalOrder/getAllMyActiveFinalOrders");
    }

    getMyDeliveredFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get("https://food-ordering-app-6u2x.onrender.com/api/finalOrder/getAllMyDeliveredFinalOrders");
    }

   changeFinalOrderStatus(finalOrderWithStatusAndId){
        TokenService.setTokenInHeader();
        return axios.put("https://food-ordering-app-6u2x.onrender.com/api/finalOrder/changeStatus", finalOrderWithStatusAndId);
    }

    deleteFinalOrder(finalOrderId){
        TokenService.setTokenInHeader();
        return axios.delete("https://food-ordering-app-6u2x.onrender.com/api/finalOrder/deleteFinalOrder/" + finalOrderId);
    }

}

export default new MealService();