package com.example.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.food.dto.StepDTO;
import com.example.food.service.StepService;

@RestController
@RequestMapping("/api/step")
public class StepController {

    @Autowired
    private StepService stepService;

    // POST endpoint to add multiple steps for a specific food item
    @PostMapping
    public ResponseEntity<String> addStepsForFood(@RequestBody List<StepDTO> stepDTOs) {
        stepService.addStepsForFood(stepDTOs);
        return ResponseEntity.ok("Steps added successfully.");
    }

    @GetMapping("/{foodId}")
    public ResponseEntity<List<StepDTO>> getStepsByFoodId(@PathVariable Long foodId) {
        List<StepDTO> steps = stepService.getStepsByFoodId(foodId);
        return ResponseEntity.ok(steps);
    }
}
