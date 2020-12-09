package com.jump.services;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import com.jump.model.Product;

@FeignClient(name="cart-service")
public interface CartService {
	
	@GetMapping(value="v1/cart")
	List<Product> getProduct();
	
	@GetMapping(value="v1/cart/total")
	double getTotal();
	
}
