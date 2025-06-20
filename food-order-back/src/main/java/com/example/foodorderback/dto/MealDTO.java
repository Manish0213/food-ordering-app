package com.example.foodorderback.dto;
import com.example.foodorderback.model.Meal;
import com.example.foodorderback.model.MealType;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


public class MealDTO {
	
 	public Long id;
	private MealType mealType;	
// 	private String mealTypeName;
 	private String name;
 	private int price;
 	private String imagePath;
 	private String description;

	public MealDTO() {
 		
 	}
 	
 	public MealDTO(Meal meal) {
// 		this(meal.getId(), meal.getMealType(), meal.getName(), meal.getPrice(), meal.getImage(), meal.getImageName());
 		this.id = meal.getId();
// 		this.mealTypeName = meal.getMealType().getTypeName();
 		this.mealType = meal.getMealType();
 		this.name = meal.getName();
 		this.price = meal.getPrice();
 		this.imagePath = meal.getImagePath();
 		this.description = meal.getDescription();
 	}

	public String getDescription() {
		return description;
	}

	public MealType getMealType() {
		return mealType;
	}

	public void setMealType(MealType mealType) {
		this.mealType = mealType;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
}
