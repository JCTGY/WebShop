package com.jump.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.exceptions.CartNotFoundException;
import com.jump.model.Product;
import com.jump.repository.CartRepository;

@Service
public class CartService {
	
	@Autowired
	CartRepository cartRepository;
	
	public List<Product> retrieveProducts(){
		return cartRepository.findAll();
	}
	
	public Product retrieveProductById(int id) {
		return cartRepository.findById(id).orElseThrow(CartNotFoundException::new);
	}
	
	public Product createProduct(Product product) {
		
		return cartRepository.save(product);
	}
	
	public boolean updateProduct(Product product) {
		retrieveProductById(product.getId());
		return cartRepository.save(product) != null;
	}
	
	public boolean deleteProduct(int id) {
		retrieveProductById(id);
		cartRepository.deleteById(id);
		return true;
	}
	
	public double sumTotal() {
		double total =0;
		List<Product> products = cartRepository.findAll();
		
		for(Product product: products) {
			total += product.getTotal();
		}
		return total;
	}
}
