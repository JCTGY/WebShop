package com.jump.services;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.jump.model.Product;

@FeignClient(name="cart-service")
public interface CartService {
	
	@GetMapping(value="/v1/cart/get/cartById/{cart_id}")
	List<Product> getCartById(@PathVariable Integer cart_id);
	
	@GetMapping(value="v1/cart/total")
	double getTotal();
	
}
