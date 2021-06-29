package com.eshoppingzone.order.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.eshoppingzone.order.model.Orders;
import com.eshoppingzone.order.repository.OrdersRepository;

@RestController
public class OrderController {
	
	
	@Autowired
	private OrdersRepository repository;
	
	
	
	
	@PostMapping("/addhistory")
	@CrossOrigin(origins= "http://localhost:3000")
	public Orders saveOrder(@RequestBody Orders order) {
	repository.save(order);
		return order;
		
	}
	
	@GetMapping("/gethistory/{username}")
	@CrossOrigin(origins= "http://localhost:3000")
	public List<Orders> getHistory(@PathVariable String username){
		return repository.findByUsername(username);
	}
	
	
}
