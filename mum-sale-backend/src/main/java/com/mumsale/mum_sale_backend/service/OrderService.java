package com.mumsale.mum_sale_backend.service;

import com.mumsale.mum_sale_backend.model.Order;
import com.mumsale.mum_sale_backend.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(Order order) {
        order.setTotalPrice(calculatePrice(order.getQuantity()));
        order.setStatus("NEW");
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    private BigDecimal calculatePrice(int quantity) {
        int bundles = quantity / 3;
        int remainder = quantity % 3;
        return BigDecimal.valueOf(bundles * 25L + remainder * 10L);
    }
}