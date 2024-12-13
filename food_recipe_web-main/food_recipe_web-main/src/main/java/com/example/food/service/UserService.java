package com.example.food.service;

import com.example.food.dto.UserDTO;


public interface UserService {
    UserDTO addUser(UserDTO userDTO);
    UserDTO getUserById(Long id);
    // User registerUser(User user);
    // User getUserByEmail(String email);
}
