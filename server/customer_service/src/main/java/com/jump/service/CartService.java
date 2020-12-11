package com.jump.service;

import javax.validation.Valid;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.jump.model.Cart;

@FeignClient(name="cart-service")
public interface CartService {

	@PostMapping("v1/cart/create/cart")
	public Cart createCart(@Valid @RequestBody Cart cart);
}
