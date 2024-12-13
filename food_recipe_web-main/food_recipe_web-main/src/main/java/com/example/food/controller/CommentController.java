package com.example.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.food.dto.CommentDTO;
import com.example.food.service.CommentService;

@RestController
@RequestMapping("/api/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping
    public ResponseEntity<CommentDTO> addComment(@RequestBody CommentDTO commentDTO) {
        CommentDTO savedComment = commentService.addComment(commentDTO);
        return ResponseEntity.ok(savedComment);
    }
    
    @GetMapping()
    public ResponseEntity<List<CommentDTO>> getAllComments() {
        List<CommentDTO> comments = commentService.getAllComments();
        return ResponseEntity.ok(comments);
    }

    // Get comments by foodId
    @GetMapping("/food/{foodId}")
    public ResponseEntity<List<CommentDTO>> getCommentsByFoodId(@PathVariable Long foodId) {
        List<CommentDTO> commentDTOs = commentService.getCommentsByFoodId(foodId);
        if (commentDTOs.isEmpty()) {
            return ResponseEntity.noContent().build(); // 204 No Content if no comments
        }
        return ResponseEntity.ok(commentDTOs); // 200 OK with the list of comments
    }


}
