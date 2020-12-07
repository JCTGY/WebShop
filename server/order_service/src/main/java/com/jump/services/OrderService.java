package com.jump.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.model.Orders;
import com.jump.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository orderRepository;
	//CREATE
	
	public Orders createOrder(Orders order) {
		return orderRepository.save(order);
	}
	
	//READ
	
	public List<Orders> getOrders(){
		return orderRepository.findAll();
	}
	
	public Optional<Orders> getOrderById(Long order_id) {
		return orderRepository.findById(order_id);
	}
	
	//UPDATE
	
	public boolean upateOrder(Orders order) {
		getOrderById(order.getId());
		return orderRepository.save(order) != null;
	}
}
