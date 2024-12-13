package com.example.food.utils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    
    // Constructor that accepts the message for the exception
    public ResourceNotFoundException(String message) {
        super(message);  // Pass the message to the superclass (RuntimeException)
    }
}
