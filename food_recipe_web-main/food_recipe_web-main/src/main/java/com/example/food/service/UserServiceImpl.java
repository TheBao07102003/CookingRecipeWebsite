package com.example.food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.food.dto.UserDTO;
import com.example.food.entity.User;
import com.example.food.repository.UserRepository;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDTO addUser(UserDTO userDTO) {

        // Map UserDTO to User entity
        User user = User.builder()
                .email(userDTO.getEmail())
                .userName(userDTO.getUserName())
                .image(userDTO.getImage())
                .password(userDTO.getPassword()) // Consider hashing passwords
                .build();

        // Save user to the database
        User savedUser = userRepository.save(user);

        // Map saved User to UserDTO
        return UserDTO.builder()
                .userId(savedUser.getUserId()) // Correct field and method name
                .email(savedUser.getEmail())
                .userName(savedUser.getUserName())
                .image(savedUser.getImage())
                .password(savedUser.getPassword()) // Avoid returning the password
                .build();
    }

    
    @Override
    public UserDTO getUserById(Long id) {
        return userRepository.findById(id)
                .map(user -> UserDTO.builder()
                        .userId(user.getUserId())
                        .email(user.getEmail())
                        .userName(user.getUserName())
                        .image(user.getImage())
                        .password(user.getPassword())
                        .build())
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + id));
    }

//     @Autowired
//     private BCryptPasswordEncoder passwordEncoder;

//     @Override
//     public User registerUser(User user) {
//         // Mã hóa mật khẩu
//         user.setPassword(passwordEncoder.encode(user.getPassword()));
//         return userRepository.save(user);
//     }

//     @Override
//     public User getUserByEmail(String email) {
//         return userRepository.findByEmail(email);
//     }
    
}
