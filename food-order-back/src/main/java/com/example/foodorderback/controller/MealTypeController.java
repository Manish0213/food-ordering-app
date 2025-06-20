package com.example.foodorderback.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Base64;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.foodorderback.dto.MealTypeDTO;
import com.example.foodorderback.model.Meal;
import com.example.foodorderback.model.MealType;
import com.example.foodorderback.service.MealTypeService;
import com.google.gson.Gson;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "api/mealType")
public class MealTypeController {

	@Autowired
	MealTypeService mealTypeService;

	@RequestMapping(value = "/getAllMealTypes", method = RequestMethod.GET)
	public ResponseEntity<List<MealTypeDTO>> getAllMaelTypeList() {
		List<MealTypeDTO> allMealTypeDTOList = mealTypeService.getAllMealTypes();
		return new ResponseEntity<List<MealTypeDTO>>(allMealTypeDTOList, HttpStatus.OK);
	}

	@RequestMapping(value = "/createMealType", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<String> createMeal(@RequestParam("image") MultipartFile image, HttpServletRequest request) {

		Gson gson = new Gson();
		MealType mealType = gson.fromJson(request.getParameter("mealType"), MealType.class);

		String responseToClient;

		responseToClient = mealTypeService.isValidInput(mealType);
		if (!responseToClient.equals("valid")) {
			return new ResponseEntity<>("invalid", HttpStatus.OK);
		}

		try {
			// Step 1: Save the image to the local filesystem
			String uploadDir = "uploads/mealTypeImages/";
			String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename(); // Unique file name
			Path uploadPath = Paths.get(uploadDir);

			if (!Files.exists(uploadPath)) {
				Files.createDirectories(uploadPath);
			}

			Path filePath = uploadPath.resolve(fileName);
			Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

			// Step 2: Save only the relative path to DB
			mealType.setImagePath(uploadDir + fileName);

			responseToClient = mealTypeService.save(mealType);

		} catch (IOException e) {
			e.printStackTrace();
			return new ResponseEntity<>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<>(responseToClient, HttpStatus.OK);
	}


//	@RequestMapping(value = "/updateMealType", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<String> editMealType(@RequestBody MealType mealType){
//		String response = mealTypeService.editMealType(mealType);
//		return new ResponseEntity<String>(response, HttpStatus.OK);
//	}


	@RequestMapping(value = "/updateMealType", method = RequestMethod.PUT, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<String> updateMealType(
			@RequestParam(value = "image", required = false) MultipartFile image,
			HttpServletRequest request) {

		Gson g = new Gson();
		MealType mealType = g.fromJson(request.getParameter("mealType"), MealType.class);

		try {
			if (image != null && !image.isEmpty()) {
				String uploadDir = "uploads/mealTypeImages/";
				String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
				Path uploadPath = Paths.get(uploadDir);

				if (!Files.exists(uploadPath)) {
					Files.createDirectories(uploadPath);
				}

				Path filePath = uploadPath.resolve(fileName);
				Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

				mealType.setImagePath(uploadDir + fileName); // ✅ Only path
			}
		} catch (IOException e) {
			e.printStackTrace();
			return new ResponseEntity<>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}

		String result = mealTypeService.editMealType(mealType);
		return new ResponseEntity<>(result, HttpStatus.OK);
	}


	@RequestMapping(value = "/deleteMealType/{id}", method = RequestMethod.PUT)
	public ResponseEntity<String> delete(@PathVariable Long id) {
		String responseToClient = mealTypeService.delete(id);;
		return new ResponseEntity<String>(responseToClient, HttpStatus.OK);
	}

}