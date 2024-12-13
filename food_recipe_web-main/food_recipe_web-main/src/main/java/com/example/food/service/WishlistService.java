package com.example.food.service;

import java.util.List;

import com.example.food.dto.WishlistDTO;
import com.example.food.dto.WishlistRequest;

public interface WishlistService {
    List<WishlistDTO> getWishlistByUserId(Long userId);
    WishlistDTO addWishlist(WishlistRequest wishlistRequest);
    void deleteWishlist(Long userId, Long wishlistId);
}
