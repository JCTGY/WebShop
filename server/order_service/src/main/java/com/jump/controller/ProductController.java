package com.jump.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.jump.model.Product;
import com.jump.services.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	ProductService productService;
	
	@PostMapping
	public ResponseEntity<Product> createProduct(@Valid @RequestBody List<Product> products) throws URISyntaxException{
		
		Product result = productService.createProducts(products);
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{order_id}")
				.buildAndExpand(result.getProductID())
				.toUri();
		
		return ResponseEntity
				.created(location)
				.build();
	}
}
