package com.example.food.dto;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;









@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentRequest {
    private String description;
    private Long userId; // ID of the user posting the comment
}
