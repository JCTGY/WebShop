package com.jump.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.model.Product;
import com.jump.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	@Autowired
	OrderService orderService;
	//CREATE
	
	public Product createProducts(List<Product> products) {
		
		for(Product product : products) {
			orderService.getOrderById(product.getOrders().getId());
			productRepository.save(product);
		}
		
		return products.get(products.size()-1);
	}
}
