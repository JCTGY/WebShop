package com.jump.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.jump.model.Product;
import com.jump.service.CartService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("v1/cart")
public class CartController {
	@Autowired
	CartService cartservice;
	
	@GetMapping
	public ResponseEntity<List<Product>> getProduct()
	{
		return ResponseEntity.ok(cartservice.retrieveProducts());
	}
	
	@PostMapping("/create")
	public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) throws URISyntaxException
	{	
		product.setTotal(product.getPrice()*product.getCount());
		Product result= cartservice.createProduct(product);
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(result.getId())
				.toUri();
		
		return ResponseEntity
				.created(location)
				.build();
				//.body(result);
	}
	
	@PutMapping("/add/{id}")
	public ResponseEntity<?> addProduct(@PathVariable int id)
	{	
		Product product = cartservice.retrieveProductById(id);
		if(id == product.getId())
		{	
			product.setCount(product.getCount()+1);
			product.setTotal(product.getPrice()*product.getCount());
			cartservice.updateProduct(product);
			return ResponseEntity.ok("Add Success!");
		}
		else
		{
		
				throw new CartIDMismatchException();
		}
	}
	
	@PutMapping("/subtract/{id}")
	public ResponseEntity<?> subtractProduct(@PathVariable int id)
	{	
		Product product = cartservice.retrieveProductById(id);
		if(id == product.getId())
		{	
			if(product.getCount() > 1)
			{
				product.setCount(product.getCount()-1);
				product.setTotal(product.getPrice()*product.getCount());
				cartservice.updateProduct(product);
				return ResponseEntity.ok("Subtract Success!");
			}
			else {
				cartservice.deleteProduct(id);
				return ResponseEntity.noContent().build();
			}
		}
		else
		{
			throw new CartIDMismatchException();
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable int id)
	{	
		cartservice.deleteProduct(id);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/clear")
	public ResponseEntity<?> clearProducts()
	{	
		List<Product> products= cartservice.retrieveProducts();
		
		for(Product product:products) {
			cartservice.deleteProduct(product.getId());
			ResponseEntity.noContent().build();
		}
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/total")
	public ResponseEntity<?> getTotal()
	{
		return ResponseEntity.ok(cartservice.sumTotal());
	}
}
