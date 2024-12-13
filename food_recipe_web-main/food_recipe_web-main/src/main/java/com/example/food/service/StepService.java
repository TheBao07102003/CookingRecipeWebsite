package com.example.food.service;

import java.util.List;

import com.example.food.dto.StepDTO;

public interface StepService {

    // Method to add multiple steps for a specific food
    void addStepsForFood(List<StepDTO> stepDTOs);
    List<StepDTO> getStepsByFoodId(Long foodId);
}
