package com.example.food.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class CookingMethodDTO {
    private Long methodId; // Add this field for the ID
    private String rating;
    private String description;
    private String image;
    private String ingredient;
    private String country;
    private String name;
    private Long foodId; // To map it with a Food entity
}
