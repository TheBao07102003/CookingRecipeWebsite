package com.example.food.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class FoodRequest {
    private Long foodId;

    private String name;           
    private String description;    
    private String image;         
    private String time;           
    private String level;          
    private String dietary;        
    private String country;
    private String ingredient;

    // Constructor, Getters, and Setters
}
