package com.example.food.controller;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.food.dto.LoginDto;
import com.example.food.dto.LoginResponseDto;
import com.example.food.dto.RegisterDto;
import com.example.food.entity.Role;
import com.example.food.entity.User;
import com.example.food.entity.UserEntity;
import com.example.food.repository.RoleRepository;
import com.example.food.repository.UserEntityRepository;
import com.example.food.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private UserEntityRepository userEntityRepository;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, UserEntityRepository userEntityRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder,UserRepository userRepository) {
        this.authenticationManager = authenticationManager;
        this.userEntityRepository = userEntityRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDto loginDto) {
        try {
            // Authenticate the user
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginDto.getUsername(), 
                    loginDto.getPassword()
                )
            );
    
            // Set the authentication context
            SecurityContextHolder.getContext().setAuthentication(authentication);
            
            // Lấy thông tin user từ UserEntity
            UserEntity userEntity = userEntityRepository.findByUsername(loginDto.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));
                
            // Tạo response
            LoginResponseDto responseDto = LoginResponseDto.builder()
                .userId(userEntity.getUser().getUserId())
                .username(userEntity.getUsername())
                .password(loginDto.getPassword())  // Không nên trả về password trong thực tế
                .build();
    
            return new ResponseEntity<>(responseDto, HttpStatus.OK);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
            return new ResponseEntity<>("Authentication failed: " + e.getMessage(), 
                HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        try {
            // // 1. Kiểm tra username đã tồn tại
            // if (userEntityRepository.existsByUsername(registerDto.getUsername())) {
            //     return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
            // }
    
            // 2. Khởi tạo User trước
            User user = User.builder()
                .userName(registerDto.getUsername())
                .password(passwordEncoder.encode(registerDto.getPassword()))
                .build();
    
            // 3. Khởi tạo UserEntity
            UserEntity userEntity = new UserEntity();
            userEntity.setUsername(registerDto.getUsername());
            userEntity.setPassword(passwordEncoder.encode(registerDto.getPassword()));
    
            // 4. Thiết lập Role
            Role role = roleRepository.findByName("USER")
                .orElseThrow(() -> new RuntimeException("Role 'USER' not found"));
            userEntity.setRoles(Collections.singletonList(role));
    
            // 5. Thiết lập mối quan hệ hai chiều
            userEntity.setUser(user);
            user.setUserEntity(userEntity);
    
            // 6. Lưu User (sẽ cascade lưu UserEntity)
            userRepository.save(user);
    
            return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);
        } catch (Exception e) {
            // 7. Log lỗi để debug
            e.printStackTrace(); 
            return new ResponseEntity<>("Registration failed: " + e.getMessage(), 
                                      HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    

}
