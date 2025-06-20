package com.example.foodorderback.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
public class MealType {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String typeName;
	
	private String imagePath;
	
	private String description;
	
	private boolean isDeleted;
	
	/*@JsonIgnore
	@OneToMany(mappedBy="mealType" ,fetch = FetchType.LAZY, cascade=CascadeType.ALL)
	private List<Meal> meals = new ArrayList<Meal>();
	*/
	
	public MealType() {
		
	}

	public MealType(Long id, String typeName, String imagePath, String description) {
		super();
		this.id = id;
		this.typeName = typeName;
		this.imagePath = imagePath;
		this.description = description;
	} 
	
	public boolean isDeleted() {
		return isDeleted;
	}

	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	public String getDescription() {
		return description;
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

	/*public List<Meal> getMeals() {
		return meals;
	}

	public void setMeals(List<Meal> meals) {
		this.meals = meals;
	} */
}
