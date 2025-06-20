package com.example.foodorderback.dto;

import com.example.foodorderback.model.MealType;

public class MealTypeDTO {
	
	private Long id;
	private String typeName;
	private String imagePath;
	private String description;
	
	public MealTypeDTO() {
		
	}
	
	public MealTypeDTO(MealType mealType) {
		this(mealType.getId(), mealType.getTypeName(), mealType.getImagePath(), mealType.getDescription());
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public MealTypeDTO(Long id, String typeName, String imagePath, String description) {
		super();
		this.id = id;
		this.typeName = typeName;
		this.imagePath = imagePath;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
}