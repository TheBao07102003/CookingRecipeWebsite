package com.example.food.utils;

import java.util.UUID;

public class FoodUtils {

    public static final String FOOD_EXISTS_CODE = "F001";
    public static final String FOOD_EXISTS_MESSAGE = "This food already exists!";
    public static final String FOOD_CREATION_SUCCESS_CODE = "F002";
    public static final String FOOD_CREATION_SUCCESS_MESSAGE = "Food has been successfully created";

    /**
     * Generate a unique identifier for the food. This can be used as a food ID
     * or some other unique attribute.
     *
     * @return A unique ID for the food item.
     */
    public static String generateFoodId() {
        // Generate a random UUID
        return UUID.randomUUID().toString();
    }
}
