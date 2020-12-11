package com.jump.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.exceptions.CartNotFoundException;
import com.jump.exceptions.ProductIDMismatchException;
import com.jump.model.Cart;
import com.jump.model.Product;
import com.jump.repository.CartRepository;
import com.jump.repository.ProductsRepository;

@Service
public class CartService {
	
	@Autowired
	CartRepository cartRepository;
	
	@Autowired
	ProductsRepository productservice;
	
//------------------------cart methods-------------------------------------------
	public List<Cart> retrieveCarts(){
		return cartRepository.findAll();
	}
	
	
	//create
	public Cart createCart(Cart cart){
		return cartRepository.save(cart);
	}
	
	
	//read
	public Cart retrieveCart(Integer cart_id) {
		return cartRepository.findById(cart_id).orElseThrow(CartNotFoundException::new);
	}

	
	
	//update
	public double sumTotal(Integer cart_id){
		
		double total =  0;
		Cart currentCart = retrieveCart(cart_id);
		List<Product> currentProducts = currentCart.getProducts();
 
		
		for(Product product: currentProducts) {
			total += product.getSubtotal();
		}
		currentCart.setTotal(total);
		
		return total;
	}
	
	
	public Cart addProductToCart(Integer cart_id, Product product) {
		Cart currentCart = retrieveCart(cart_id);
	
		List<Product> currentProducts = currentCart.getProducts();
		
//		if(productservice.findById(product.getId()) == null) {
//			System.out.print("good");
//			currentProducts.add(product);
//		}else {
//			Product exProduct = productservice.findById(product.getId()).orElseThrow(ProductIDMismatchException::new);
//			exProduct.setQty(exProduct.getQty()+product.getQty());
//			System.out.print("bad");
//		}
		
		currentProducts.add(product);
		return cartRepository.save(currentCart);
	}
	
	//delete
	
//-------------------------product methods---------------------------------------
//	public List<Product> retrieveProducts(){
//		return Repository.findAll();
//	}
//	
//	public Product retrieveProductById(int id) {
//		return cartRepository.findById(id).orElseThrow(CartNotFoundException::new);
//	}
//	
//	
//	public Product createProduct(Product product) {
//		
//		return cartRepository.save(product);
//	}
//	
//	public boolean updateProduct(Product product) {
//		retrieveProductById(product.getId());
//		return cartRepository.save(product) != null;
//	}
//	
//	public boolean deleteProduct(int id) {
//		retrieveProductById(id);
//		cartRepository.deleteById(id);
//		return true;
//	}
//	
//	public double sumTotal() {
//		double total =0;
//		List<Product> products = cartRepository.findAll();
//		
//		for(Product product: products) {
//			total += product.getTotal();
//		}
//		return total;
//	}
}
