package com.eshoppingzone.order.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.eshoppingzone.order.model.Orders;


public interface OrdersRepository extends MongoRepository<Orders,String> {

	public List<Orders> findByUsername(String username);
}
