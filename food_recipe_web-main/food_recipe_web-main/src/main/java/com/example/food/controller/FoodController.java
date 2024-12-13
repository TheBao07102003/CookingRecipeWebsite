package com.example.food.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.example.food.dto.Agenda;
import com.example.food.dto.AgendaRespond;
import com.example.food.dto.FoodRequest;
import com.example.food.dto.FoodDTO;


import com.example.food.service.FoodService;


@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodService foodService;

   

    @GetMapping("/agentdatoday")
    public ResponseEntity<Agenda> getAgentDataToday() {
        Agenda agenda = foodService.getAgentDataToday();
        return ResponseEntity.ok(agenda);
    }

    @PostMapping("/food")
    public AgendaRespond addFood(@RequestBody FoodRequest foodRequest) {
        return foodService.addFood(foodRequest);
    }

    @GetMapping("/country/{country}")  // /api/food/country/{country}
    public List<FoodDTO> getFoodsByCountry(@PathVariable String country) {
        return foodService.getFoodsByCountry(country);
    }

    @GetMapping("/dietary/{dietary}")
    public List<FoodDTO> getFoodsByDietary(@PathVariable String dietary) {
        return foodService.getFoodsByDietary(dietary);
    }

    @GetMapping("/method/{method}")
    public List<FoodDTO> getFoodsByMethod(@PathVariable String method) {
        return foodService.getFoodsByMethod(method);
    }
    
}
