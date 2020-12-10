package com.jump.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.exceptions.OrderNotFoundException;
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
	
	public Orders getOrderById(long id) {
		return orderRepository.findById(id)
				.orElseThrow(OrderNotFoundException::new);
	}
	
	public List<Orders> getOrdersByCustId(long customer_id) {
		return orderRepository.findByCustomerId(customer_id);
	}
	
	//UPDATE
	
	public boolean upateOrder(Orders order) {
		getOrderById(order.getId());
		return orderRepository.save(order) != null;
	}
	
	//DELETE

	public boolean deleteOrder(long id) {

		getOrderById(id);
		orderRepository.deleteById(id);
		return true;
		
	}
}
