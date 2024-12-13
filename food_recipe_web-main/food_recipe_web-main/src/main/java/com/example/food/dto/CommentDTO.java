package com.example.food.dto;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class CommentDTO {
    private Long commentId;
    private String description;
    private Long userId;
    private Long foodId;
    private String date;
    private String userName;

    // Constructor, Getters, and Setters
}
