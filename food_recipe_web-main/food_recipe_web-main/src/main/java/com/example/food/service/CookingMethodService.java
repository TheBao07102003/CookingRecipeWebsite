package com.example.food.service;

import java.util.List;

import com.example.food.dto.CookingMethodDTO;

public interface CookingMethodService {
    CookingMethodDTO addCookingMethod(CookingMethodDTO cookingMethod);
    List<CookingMethodDTO> getAllCookingMethods(); // Add this method
    CookingMethodDTO getCookingMethodByFoodId(Long foodId);

}
