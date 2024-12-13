package com.example.food.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.food.entity.UserEntity;

public interface UserEntityRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByUsername(String username);
    // Boolean existByUsername(String username);
}
