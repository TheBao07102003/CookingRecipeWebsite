package com.example.food.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.food.dto.StepDTO;
import com.example.food.entity.Food;
import com.example.food.entity.Step;
import com.example.food.repository.FoodRepository;
import com.example.food.repository.StepRepository;

@Service
public class StepServiceImpl implements StepService {

    @Autowired
    private StepRepository stepRepository;

    @Autowired
    private FoodRepository foodRepository;

    @Override
    public void addStepsForFood(List<StepDTO> stepDTOs) {
        // Loop through the list of StepDTOs and create Step entities
        for (StepDTO stepDTO : stepDTOs) {
            // Fetch the Food entity by its ID
            Food food = foodRepository.findById(stepDTO.getFoodId())
                    .orElseThrow(() -> new RuntimeException("Food not found with ID: " + stepDTO.getFoodId()));

            // Create the Step entity
            Step step = new Step();
            step.setDescription(stepDTO.getDescription());
            step.setFood(food); // Link to the Food entity

            // Save the Step entity to the database
            stepRepository.save(step);
        }
    }

    @Override
    public List<StepDTO> getStepsByFoodId(Long foodId) {
        // Find the food entity by its ID (ensure the food exists)
        foodRepository.findById(foodId).orElseThrow(() -> new RuntimeException("Food not found with ID: " + foodId));

        // Fetch all steps for the given foodId
        List<Step> steps = stepRepository.findByFood_foodId(foodId);

        // Map each Step entity to StepDTO
        return steps.stream()
                .map(step -> StepDTO.builder()
                        .foodId(step.getFood().getFoodId()) // Mapping foodId
                        .description(step.getDescription()) // Mapping description
                        .build())
                .collect(Collectors.toList());
    }

}
