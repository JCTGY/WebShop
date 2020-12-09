package com.jump.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.exception.ProductNotFoundException;
import com.jump.model.Product;
import com.jump.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	public List<Product> getProducts() {
		return productRepository.findAll();
	}
	
	public Product addProduct(Product product) {
		return productRepository.save(product);
	}
	
	public Product getProductByName(String name) {
		return productRepository.findByName(name)
				.orElseThrow(ProductNotFoundException::new);
	}
	
	public List<Product> getProductsByContaingName(String name) {
		return productRepository.findByNameContainingIgnoreCase(name);
	}
	
	public Product getProductById(Long id) {
		return productRepository.findById(id)
				.orElseThrow(ProductNotFoundException::new);
	}
	
	public void deleteProduct(Long id) {
		getProductById(id);
		productRepository.deleteById(id);;
	}
	
	public List<Product> getProductsByCategory(String category) {
		return productRepository.findAllByCategory(category);
	}
	
	public Product updateProduct(Product product) {
		getProductById(product.getId());
		return productRepository.save(product);
	}
	
}
