package com.example.food.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.food.entity.CookingMethod;
public interface CookingMethodRepository extends JpaRepository<CookingMethod, Long> {
    List<CookingMethod> findByCountry(String country);
    CookingMethod findFirstByFoodFoodId(Long foodId);

}
