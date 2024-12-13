package com.example.food.service;

import java.util.List;

import com.example.food.dto.CommentDTO;

public interface CommentService {
    CommentDTO addComment(CommentDTO commentDTO);
    List<CommentDTO> getAllComments(); // Add this method
    List<CommentDTO> getCommentsByFoodId(Long foodId);
}
