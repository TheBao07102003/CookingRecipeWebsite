package com.example.food.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.food.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByName(String name);

}
