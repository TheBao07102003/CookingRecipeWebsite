package com.example.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.food.dto.WishlistDTO;
import com.example.food.dto.WishlistRequest;
import com.example.food.service.WishlistService;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    @Autowired
    public WishlistService wishlistService;

    @GetMapping("/{userid}")
    public ResponseEntity<List<WishlistDTO>> getWishlistByUserId(@PathVariable("userid") Long userId) {
        List<WishlistDTO> wishlist = wishlistService.getWishlistByUserId(userId);
        return ResponseEntity.ok(wishlist);
    }

    @PostMapping
    public ResponseEntity<WishlistDTO> addWishlist(@RequestBody WishlistRequest wishlistRequest) {
        WishlistDTO wishlistDTO = wishlistService.addWishlist(wishlistRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(wishlistDTO);
    }

    @DeleteMapping("/{userid}/{wishlistId}")
    public ResponseEntity<String> deleteWishlist(@PathVariable("userid") Long userId,
            @PathVariable("wishlistId") Long wishlistId) {
        wishlistService.deleteWishlist(userId, wishlistId);
        return ResponseEntity.status(HttpStatus.OK).body("Wishlist item deleted successfully.");
    }
}
