package com.example.food.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.food.dto.CommentDTO;
import com.example.food.entity.Comment;
import com.example.food.entity.Food;
import com.example.food.entity.User;
import com.example.food.repository.CommentRepository;
import com.example.food.repository.FoodRepository;
import com.example.food.repository.UserRepository;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FoodRepository foodRepository;

    @Override
    public CommentDTO addComment(CommentDTO commentDTO) {
        // Fetch related entities
        Food food = foodRepository.findById(commentDTO.getFoodId())
                .orElseThrow(() -> new RuntimeException("Food not found with ID: " + commentDTO.getFoodId()));

        User user = userRepository.findById(commentDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + commentDTO.getUserId()));

        // Map DTO to Entity
        Comment comment = Comment.builder()
                .description(commentDTO.getDescription())
                .date(commentDTO.getDate())
                .food(food)
                .user(user)
                .build();

        // Save Comment
        Comment savedComment = commentRepository.save(comment);

        // Map Entity back to DTO
        return CommentDTO.builder()
                .commentId(savedComment.getCommentId())
                .description(savedComment.getDescription())
                .date(savedComment.getDate())
                .foodId(savedComment.getFood().getFoodId())
                .userId(savedComment.getUser().getUserId())
                .build();
    }

    @Override
    public List<CommentDTO> getAllComments() {
        return commentRepository.findAll().stream()
                .map(comment -> CommentDTO.builder()
                        .commentId(comment.getCommentId())
                        .date(comment.getDate())
                        .description(comment.getDescription())
                        .userId(comment.getUser().getUserId())
                        .foodId(comment.getFood().getFoodId())
                        .userName(comment.getUser().getUserName())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public List<CommentDTO> getCommentsByFoodId(Long foodId) {
        // Fetch comments by foodId using the repository method
        return commentRepository.findByFood_FoodId(foodId).stream()
                .map(comment -> CommentDTO.builder()
                        .commentId(comment.getCommentId())
                        .date(comment.getDate())
                        .description(comment.getDescription())
                        .userId(comment.getUser().getUserId())
                        .foodId(comment.getFood().getFoodId())
                        .userName(comment.getUser().getUserName())
                        .build())
                .collect(Collectors.toList());
    }
    
    
    

}
