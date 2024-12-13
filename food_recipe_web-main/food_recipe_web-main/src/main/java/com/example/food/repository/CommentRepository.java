package com.example.food.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.food.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByFood_FoodId(Long foodId);
    
}
