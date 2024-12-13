package com.example.food.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.food.dto.CookingMethodDTO;
import com.example.food.entity.CookingMethod;
import com.example.food.entity.Food;
import com.example.food.repository.CookingMethodRepository;
import com.example.food.repository.FoodRepository;


@Service
public class CookingMethodServiceImpl implements CookingMethodService {

    @Autowired
    private CookingMethodRepository cookingMethodRepository;

    @Autowired
    private FoodRepository foodRepository;

    @Override
    public CookingMethodDTO addCookingMethod(CookingMethodDTO cookingMethodDTO) {
        // Fetch the Food entity by ID
        Food food = foodRepository.findById(cookingMethodDTO.getFoodId())
                .orElseThrow(() -> new RuntimeException("Food with ID " + cookingMethodDTO.getFoodId() + " not found"));

        // Map DTO to Entity
        CookingMethod cookingMethod = CookingMethod.builder()
                .methodId(cookingMethodDTO.getMethodId()) // Set methodId if provided
                .rating(cookingMethodDTO.getRating())
                .description(cookingMethodDTO.getDescription())
                .image(cookingMethodDTO.getImage())
                .ingredient(cookingMethodDTO.getIngredient())
                .country(cookingMethodDTO.getCountry())
                .name(cookingMethodDTO.getName())
                .food(food)
                .build();

        // Save the CookingMethod entity
        CookingMethod savedMethod = cookingMethodRepository.save(cookingMethod);

        // Map Entity back to DTO
        return CookingMethodDTO.builder()
                .methodId(savedMethod.getMethodId())
                .rating(savedMethod.getRating())
                .description(savedMethod.getDescription())
                .image(savedMethod.getImage())
                .ingredient(savedMethod.getIngredient())
                .country(savedMethod.getCountry())
                .name(savedMethod.getName())
                .foodId(savedMethod.getFood().getFoodId())
                .build();
    }

    @Override
    public List<CookingMethodDTO> getAllCookingMethods() {
        return cookingMethodRepository.findAll().stream()
                .map(method -> CookingMethodDTO.builder()
                        .methodId(method.getMethodId())
                        .rating(method.getRating())
                        .description(method.getDescription())
                        .image(method.getImage())
                        .ingredient(method.getIngredient())
                        .country(method.getCountry())
                        .name(method.getName())
                        .foodId(method.getFood().getFoodId()) // Map Food ID
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public CookingMethodDTO getCookingMethodByFoodId(Long foodId) {
        CookingMethod cookingMethod = cookingMethodRepository.findFirstByFoodFoodId(foodId);
        return cookingMethod != null ? convertToDTO(cookingMethod) : null;
    }

    private CookingMethodDTO convertToDTO(CookingMethod cookingMethod) {
        CookingMethodDTO dto = new CookingMethodDTO();
        dto.setMethodId(cookingMethod.getMethodId());
        dto.setRating(cookingMethod.getRating());
        dto.setDescription(cookingMethod.getDescription());
        dto.setImage(cookingMethod.getImage());
        dto.setIngredient(cookingMethod.getIngredient());
        dto.setCountry(cookingMethod.getCountry());
        dto.setName(cookingMethod.getName());
        dto.setFoodId(cookingMethod.getFood().getFoodId());
        return dto;
    }
  
}
    

