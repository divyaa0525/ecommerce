package com.example.ecommerce.controller;

import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;

import com.example.ecommerce.model.Order;
import com.example.ecommerce.repository.OrderRepository;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController {

    private final OrderRepository repo;

    public OrderController(OrderRepository repo) {
        this.repo = repo;
    }

    // PLACE ORDER
    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        order.setOrderDate(LocalDateTime.now());
        return repo.save(order);
    }
}