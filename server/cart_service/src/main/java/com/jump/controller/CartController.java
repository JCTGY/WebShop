package com.jump.controller;

import java.net.URI;
import java.net.URISyntaxException;
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

import com.jump.exceptions.CartIDMismatchException;
import com.jump.model.Cart;
import com.jump.model.Product;
import com.jump.repository.CartRepository;
import com.jump.service.CartService;
import com.jump.service.ProductsService;

//@CrossOrigin("http://localhost:3000"
@RestController
@RequestMapping("v1/cart")
public class CartController {
	
	
	@Autowired
	CartService cartservice;
	
	@Autowired
	ProductsService productsservice;
	

	//create
	@PostMapping("/create/cart")
	public ResponseEntity<Cart> createCart(@Valid @RequestBody Cart cart) throws URISyntaxException
	{	
		Cart result= cartservice.createCart(cart);
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{cart_id}")
				.buildAndExpand(result.getCartId())
				.toUri();
		
		return ResponseEntity
				.created(location)
				.body(result);
		
	}
	
	//read
	@GetMapping("/get/cart")
	public ResponseEntity<List<Cart>> getCart(){
		return ResponseEntity.ok(cartservice.retrieveAllCarts());
	}
	//read
	@GetMapping("/get/cartById/{cart_id}")
	public ResponseEntity<List<Product>> getCartById(@PathVariable Integer cart_id){
		return ResponseEntity.ok(cartservice.retrieveCart(cart_id).getProducts());
	}
	//read
	@GetMapping("/{cart_id}")
	public ResponseEntity<Cart> findCartById(@PathVariable Integer cart_id) {
		return ResponseEntity.ok(cartservice.retrieveCart(cart_id));
	}
	//read
	@GetMapping("/get/totalByCartId/{cart_id}")
	public ResponseEntity<Double> getTotalByCartId(@PathVariable Integer cart_id){

		return ResponseEntity.ok(cartservice.sumTotal(cart_id));
	}
	
	
	//update
	@PutMapping("/update/addProductToCart/{cart_id}")
	public ResponseEntity<?> addToCart(@PathVariable Integer cart_id, @Valid @RequestBody Product product){
		
		return ResponseEntity.ok(cartservice.addProductToCart(cart_id, product));
	}
	
	
	//delete
	@DeleteMapping("/delete/clearCart/{cart_id}")
	public ResponseEntity<?> clearCart(@PathVariable Integer cart_id){
			
			return ResponseEntity.ok(cartservice.clearCart(cart_id));
	}



}
