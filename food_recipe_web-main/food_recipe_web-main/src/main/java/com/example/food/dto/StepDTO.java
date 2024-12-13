package com.example.food.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StepDTO {
     // Step ID
    private String description;  // Description of the step
    private Long foodId;  // Associated food ID
}
