package com.jump.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.exceptions.ProductIDMismatchException;
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
		if(product.getId() == null) {
			return productsRepository.save(product);
		}else {
			return null;
		}
	}
	
	//read
	public List<Product> retrieveProducts(){
		return productsRepository.findAll();
	}
	
	public Product retrieveProductById(Integer Id) {
		return productsRepository.findById(Id).orElseThrow(ProductNotFoundException::new);
	}
	
	//update
	public boolean updateProduct(Product product) {
		retrieveProductById(product.getId());
		return productsRepository.save(product) != null;
	}
	
	public boolean addProduct(Integer Id, int qty) {
		Product product = productsRepository.findById(Id).orElseThrow(ProductIDMismatchException::new);
		product.setQty(product.getQty()+qty);
		return true;
	}
	
	public boolean subtractProduct(Integer Id, int qty) {
		Product product = productsRepository.findById(Id).orElseThrow(ProductIDMismatchException::new);
		if(product.getQty()>1) {
			product.setQty(product.getQty()+qty);
		}else {
			deleteProduct(Id);
		}
		return true;
	}
	
	
	//delete
	public boolean deleteProduct(Integer id) {
		retrieveProductById(id);
		productsRepository.deleteById(id);
		return true;
	}
	

}
