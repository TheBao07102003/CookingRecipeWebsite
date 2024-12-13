package com.example.food.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.food.entity.User;
public interface UserRepository extends JpaRepository<User, Long>{
    User findByEmail(String email); 
    // Boolean existByUsername(String username);
}
