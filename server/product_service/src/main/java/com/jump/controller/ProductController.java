package com.jump.controller;

import java.net.URI;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.jump.exception.ProductIdNotMatchException;
import com.jump.model.Product;
import com.jump.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	ProductService productService;
	
	@GetMapping
	public ResponseEntity<List<Product>> findAllProducts() {
		return ResponseEntity.ok(productService.getProducts());
	}
	
	@PostMapping
	public ResponseEntity<Product> addProduct(@Valid @RequestBody Product product) {
		Product result = productService.addProduct(product);
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(result.getId())
				.toUri();
		return ResponseEntity.created(location).body(result);
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<Product>>  findProductsByContainingName(@RequestParam String name) {
		return ResponseEntity.ok(productService.getProductsByContaingName(name));
	}
	
	@GetMapping("/category")
	public List<Product> findAllProductsByCategory(@RequestParam String category) {
		return productService.getProductsByCategory(category);
	}
	
	@GetMapping("/{productId}")
	public Product findProductById(@PathVariable Long productId) {
		return productService.getProductById(productId);
	}
	
	@DeleteMapping("/{productId}")
	public ResponseEntity<?> deleteProduct(@PathVariable Long productId) {
		productService.deleteProduct(productId);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/{productId}")
	public ResponseEntity<?> updateProduct(@PathVariable Long productId,
			@Valid @RequestBody Product product) {
		if (productId == product.getId()) {
			productService.updateProduct(product);
			return ResponseEntity.ok("Updated!");
		} else throw new ProductIdNotMatchException();
	}
}
