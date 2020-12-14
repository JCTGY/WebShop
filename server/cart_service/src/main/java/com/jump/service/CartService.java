package com.jump.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.exceptions.CartNotFoundException;
import com.jump.exceptions.ProductIDMismatchException;
import com.jump.exceptions.ProductNotFoundException;
import com.jump.model.Cart;
import com.jump.model.Product;
import com.jump.repository.CartRepository;
import com.jump.repository.ProductsRepository;

@Service
public class CartService {
	
	@Autowired
	CartRepository cartRepository;
	
	
	@Autowired
	ProductsRepository productRepository;
	
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
	
	public List<Cart> retrieveAllCarts() {
		return cartRepository.findAll();
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
		cartRepository.save(currentCart);
		return total;
	}
	
	//update
	public Cart addProductToCart(Integer cart_id, Product product) {
		Cart currentCart = retrieveCart(cart_id);
	
		List<Product> currentProducts = currentCart.getProducts();
		
		if(currentProducts.isEmpty()) {
			currentProducts.add(product);
			System.out.println("check 1");
		}else {
			for(Product p: currentProducts) {
				if(p.getId().equals(product.getId())) {
					p.setQty(p.getQty()+product.getQty());
					p.setSubtotal(p.getPrice()*p.getQty());
					return cartRepository.save(currentCart);
				}
			}
			
			currentProducts.add(product);
		}
		
		return cartRepository.save(currentCart);
	}
	
	//update
	public boolean increaseQtyByOne(Integer cart_id, Integer product_id) {
		Cart currentCart = retrieveCart(cart_id);
		Product currentProduct = productRepository.findById(product_id).orElseThrow(ProductIDMismatchException::new);
		
		int qty = currentProduct.getQty();
		currentProduct.setQty(qty+1);
		currentProduct.setSubtotal(currentProduct.getPrice()*qty);
		
		productRepository.save(currentProduct);
		return true;
	}
	
	//update
	public boolean decreaseQtyByOne(Integer cart_id, Integer product_id) {
		Cart currentCart = retrieveCart(cart_id);
		Product currentProduct = productRepository.findById(product_id).orElseThrow(ProductIDMismatchException::new);
		
		int qty = currentProduct.getQty();
		currentProduct.setQty(qty-1);
		if(currentProduct.getQty() < 0) {
			currentProduct.setQty(0);
		}

		currentProduct.setSubtotal(currentProduct.getPrice()*qty);
				
		productRepository.save(currentProduct);
		return true;
	}
	
	
	
	//update
	public boolean updateQty(Integer cart_id, Integer product_id, int qty) {
		
		Cart currentCart = retrieveCart(cart_id);
		Product currentProduct = productRepository.findById(product_id).orElseThrow(ProductIDMismatchException::new);
		
		if(qty <= 0) {
			
			currentProduct.setQty(0);
			currentProduct.setSubtotal(0);
		}else {	
			currentProduct.setQty(qty);
			currentProduct.setSubtotal(currentProduct.getPrice()*qty);
		}
		
		
		productRepository.save(currentProduct);
		
		return true;
	}
	
	//delete
	public boolean clearCart(Integer cart_id) {
		Cart cart = retrieveCart(cart_id);
		List<Product> products = cart.getProducts();
		cart.setProducts(null);
		products.stream().forEach(p -> {
			productRepository.delete(p);
		});
		System.out.println("delete Cart");
		System.out.println("cart:" + cartRepository.save(cart));
		return true;
	}
	//delete
	public boolean deleteProduct(Integer cart_id, Integer product_id) {
		
		Cart currentCart = retrieveCart(cart_id);	
		List<Product> currentProducts = currentCart.getProducts();
		for(Product product:currentProducts) {
			System.out.println(product.getId());
			if(product.getId()==product_id) {	
				currentProducts.remove(product);
				currentCart.setProducts(currentProducts);
				productRepository.deleteById(product_id);
				cartRepository.save(currentCart);			
				return true;
			}
		}
		return false;
	}
//------------------------product------------------------------
	//read
	public Product retrieveProductById(Integer product_id) {
		return productRepository.findById(product_id).orElseThrow(ProductNotFoundException::new);
	}
	
}