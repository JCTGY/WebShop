package com.jump.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
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
import com.jump.model.Product;
import com.jump.services.CartService;
import com.jump.services.OrderService;
import com.jump.services.ProductService;

@RestController
@RequestMapping("/")
public class OrderController {

	@Autowired
	OrderService orderService;
	
	@Autowired
	ProductService productService;
	
	@Autowired
	CartService cartService;
	
	
	
	@PostMapping
	public ResponseEntity<Orders> createOrder(@Valid @RequestBody Orders order) throws URISyntaxException{
		
//		System.out.println(cartService.getTotal());
		order.setTotal(cartService.getTotal());
		order.setDate(LocalDate.now());
		
		List<Product> products = cartService.getProduct();
		
		Orders result = orderService.createOrder(order);
		
		for(Product product : products) {
			product.setOrders(result);
		}
		
		productService.createProducts(products);
		result.setProducts(products);
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{order_id}")
				.buildAndExpand(result.getId())
				.toUri();
		
		return ResponseEntity
				.created(location)
				.body(result);	
	}
	
	
	@GetMapping
	public ResponseEntity<List<Orders>> getOrders(){
		return ResponseEntity.ok(orderService.getOrders());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getOrderById(@PathVariable long id){
		Orders result = orderService.getOrderById(id);
			
		return ResponseEntity.ok(result);
		
	}
	
	
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateOrder(@PathVariable long id, @Valid @RequestBody Orders order){
		if(id == order.getId()) {
			orderService.upateOrder(order);
			return ResponseEntity.ok("Order Status Successfully Updated.");
		}
		else {
			throw new OrderIdMismatchException();
		}
	}
	
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteOrder(@PathVariable long id){
		orderService.deleteOrder(id);
		return ResponseEntity.noContent().build();
	}


}
