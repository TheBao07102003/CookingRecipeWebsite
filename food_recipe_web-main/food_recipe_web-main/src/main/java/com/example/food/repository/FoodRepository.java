package com.example.food.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.food.entity.Food;

public interface FoodRepository extends JpaRepository<Food, Long> {

    Boolean existsByName(String name);

    List<Food> findByCountry(String country);

    List<Food> findByDietary(String dietary);

    List<Food> findByMethod (String method);
}
