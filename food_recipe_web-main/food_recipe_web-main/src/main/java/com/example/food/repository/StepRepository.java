package com.example.food.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.food.entity.Step;

public interface StepRepository extends JpaRepository<Step, Long> {
    List<Step> findByFood_foodId(Long foodId);
}
