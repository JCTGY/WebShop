package com.jump.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.exceptions.ProductNotFoundException;
import com.jump.model.Cart;
import com.jump.model.Product;
import com.jump.repository.CartRepository;
import com.jump.repository.ProductsRepository;


@Service
public class ProductsService {
	@Autowired
	ProductsRepository productsRepository;
	
	
	//create
	public Product createProduct(Product product) {
		
		return productsRepository.save(product);
	}
	
	//read
	public List<Product> retrieveProducts(){
		return productsRepository.findAll();
	}
	
	public Product retrieveProductById(int id) {
		return productsRepository.findById(id).orElseThrow(ProductNotFoundException::new);
	}
	
	
	//update
	public boolean updateProduct(Product product) {
		retrieveProductById(product.getId());
		return productsRepository.save(product) != null;
	}
	
	
	//delete
	public boolean deleteProduct(int id) {
		retrieveProductById(id);
		productsRepository.deleteById(id);
		return true;
	}
	
	
	//mist
//	public double sumTotal() {
//		double total =0;
//		List<Product> products = productsRepository;
//		
//		for(Product product: products) {
//			total += product.getSubtotal();
//		}
//		return total;
//	}

}
