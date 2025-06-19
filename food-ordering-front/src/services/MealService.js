import axios from "axios";
import TokenService from "./TokenService";

class MealService{

    getAllMeals(){
        TokenService.setTokenInHeader();
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/meal/getAllMeals`);
    }

    createMeal(fd){
        TokenService.setTokenInHeader();
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/meal/createMeal`, fd);
    }

    deleteMeal(mealId){
        TokenService.setTokenInHeader();
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/meal/deleteMeal/` + mealId);
    }

    getAllMealTypes(){
        TokenService.setTokenInHeader();
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/mealType/getAllMealTypes`);
    }

    updateMeal(meal){
        TokenService.setTokenInHeader();
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/meal/updateMeal`, meal);
    }

    getMealsByMealTypeId(mealTypeId){
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/meal/getMealsByMealTypeId/` + mealTypeId);
    }

    sendItemsForFinalOrder(itemsFromCartFinalOrder){
        TokenService.setTokenInHeader();
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/finalOrder/createFinalOrder`, itemsFromCartFinalOrder); 
    }

    getFinalOrderById(finalOrderId){
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/finalOrder/getFinalOrderById/` + finalOrderId);
    }

    getOrderItemsByFinalOrderId(finalOrderId){
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/finalOrder/getOrderItemsByFinalOrderId/` + finalOrderId);
    }

    getAllActiveFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/finalOrder/getAllActiveFinalOrders`);
    }
    
    getAllDeliveredFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/finalOrder/getAllDeliveredFinalOrders`);
    }

    getMyActiveFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/finalOrder/getAllMyActiveFinalOrders`);
    }

    getMyDeliveredFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/finalOrder/getAllMyDeliveredFinalOrders`);
    }

   changeFinalOrderStatus(finalOrderWithStatusAndId){
        TokenService.setTokenInHeader();
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/finalOrder/changeStatus`, finalOrderWithStatusAndId);
    }

    deleteFinalOrder(finalOrderId){
        TokenService.setTokenInHeader();
        return axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/finalOrder/deleteFinalOrder/` + finalOrderId);
    }

}

export default new MealService();