package com.example.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.ecommerce.model.CartItem;

public interface CartRepository extends JpaRepository<CartItem, Long> {
}