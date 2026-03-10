package com.mumsale.mum_sale_backend.repository;

import com.mumsale.mum_sale_backend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}