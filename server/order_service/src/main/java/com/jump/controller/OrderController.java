package com.jump.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.jump.exceptions.OrderIdMismatchException;
import com.jump.model.Orders;
import com.jump.services.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {

	@Autowired
	OrderService orderService;
	//CREATE
	
	@PostMapping
	public ResponseEntity<Orders> createOrder(@Valid @RequestBody Orders order) throws URISyntaxException{
		
		Orders result = orderService.createOrder(order);
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{order_id}")
				.buildAndExpand(result.getId())
				.toUri();
		
		return ResponseEntity
				.created(location)
				.build();
	}
	
	//READ
	
	@GetMapping
	public ResponseEntity<List<Orders>> getOrders(){
		return ResponseEntity.ok(orderService.getOrders());
	}
	
	//UPDATE
	@PutMapping("/{order_id}")
	public ResponseEntity<?> updateOrder(@PathVariable long id, @Valid @RequestBody Orders order){
		if(id == order.getId()) {
			orderService.upateOrder(order);
			return ResponseEntity.ok("Order Status Successfully Updated.");
		}
		else {
			throw new OrderIdMismatchException();
		}
	}
	
	//DELETE
}
