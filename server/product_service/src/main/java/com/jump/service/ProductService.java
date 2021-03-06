package com.jump.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.jump.exception.ProductNotFoundException;
import com.jump.exception.ProductPageNotFoundException;
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
	
	public List<Product> getProductsByContaingName(String name, int page, int size) {
		return productRepository.findByNameContainingIgnoreCase(name, PageRequest.of(page, size));
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
		getProductById(product.getProductId());
		return productRepository.save(product);
	}
	
	public List<Product> getProductsByPages(int page, int size) {
		Page<Product> productPage = productRepository.findAll(PageRequest.of(page, size));
		if (productPage.hasContent()) {
			return productPage.getContent();
		} else throw new ProductPageNotFoundException();
	}
	
}
