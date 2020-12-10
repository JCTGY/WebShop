package com.jump.controller;

import java.net.URI;
import java.net.URISyntaxException;
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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.jump.exceptions.CartIDMismatchException;
import com.jump.model.Cart;
import com.jump.model.Product;
import com.jump.service.CartService;
import com.jump.service.ProductsService;

//@CrossOrigin("http://localhost:3000"
@RestController
@RequestMapping("v1/cart")
public class CartController {
	
	
	@Autowired
	CartService cartservice;
	
	@Autowired
	ProductsService productsservice;
	

	//create
	@PostMapping("/create/cart")
	public ResponseEntity<Cart> createCart(@Valid @RequestBody Cart cart) throws URISyntaxException
	{	
		Cart result= cartservice.createCart(cart);
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{cart_id}")
				.buildAndExpand(result.getCartId())
				.toUri();
		
		return ResponseEntity
				.created(location)
				.body(result);
		
	}

	//read
	@GetMapping("/get/cartById/{cart_id}")
	public ResponseEntity<List<Product>> getCartById(@PathVariable Integer cart_id){
		return ResponseEntity.ok(cartservice.retrieveCart(cart_id).getProducts());
	}
	
	//update
	@PutMapping("/update/addProductToCart/{cart_id}")
	public ResponseEntity<?> addToCart(@PathVariable Integer cart_id, @Valid @RequestBody Product product){
		return ResponseEntity.ok(cartservice.addProductToCart(cart_id, product));
	}
	
	//update
	@PutMapping("/update/sumTotalToCart/{cart_id}")
	public ResponseEntity<?> sumToCart(@PathVariable Integer cart_id){
		return ResponseEntity.ok(cartservice.sumTotal(cart_id));
	}


//------------------------products controller-----------------------------------------------
	
	
	
//	
//		Product product = productsservice.retrieveProductById(id);
//		if(id == product.getId())
//		{	
//			product.setCount(product.getCount()+1);
//			product.setTotal(product.getPrice()*product.getCount());
//			cartservice.updateProduct(product);
//			return ResponseEntity.ok("Add Success!");
//		}
//		else
//		{
//		
//				throw new CartIDMismatchException();
//		}
//	}
	
//	
//	@PutMapping("/add/cart/{cart_id}")
//	public ResponseEntity<?> addProductToCart(@PathVariable  cart_id){
//		
//	}
//	
//	
	//create
	@PostMapping("/create/product")
	public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product)
	{	
		product.setSubtotal((product.getPrice()*product.getQty()));
		Product result= productsservice.createProduct(product);
		
		return ResponseEntity
				.ok(result);
	}
	
	
	
	//read
	@GetMapping("/update/get/allProducts")
	public ResponseEntity<List<Product>> getProduct()
	{
		return ResponseEntity.ok(productsservice.retrieveProducts());
	}

	
	//update
//	@PutMapping("/update/add/productBuId/{id}")
//	public ResponseEntity<?> addProduct(@PathVariable int id)
//	{	
//		Product product = productsservice.retrieveProductById(id);
//		Cart cart = cartservice.
//		
//		if(id == product.getId())
//		{	
//			product.setQty(product.getQty()+1);
//			product.setSubtotal(product.getPrice()*product.getQty());
//			productsservice.updateProduct(product);
//			return ResponseEntity.ok("Add Success!");
//		}
//		else
//		{
//		
//				throw new CartIDMismatchException();
//		}
//	}
	
	@PutMapping("/update/subtract/ProductById/{id}")
	public ResponseEntity<?> subtractProduct(@PathVariable int id)
	{	
		Product product = productsservice.retrieveProductById(id);
		if(id == product.getId())
		{	
			if(product.getQty() > 1)
			{
				product.setQty(product.getQty()-1);
				product.setSubtotal(product.getPrice()*product.getQty());
				productsservice.updateProduct(product);
				return ResponseEntity.ok("Subtract Success!");
			}
			else {
				productsservice.deleteProduct(id);
				return ResponseEntity.noContent().build();
			}
		}
		else
		{
			throw new CartIDMismatchException();
		}
	}
	
	//delete
	@DeleteMapping("/delete/productById/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable int id)
	{	
		productsservice.deleteProduct(id);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/delete/allProduct")
	public ResponseEntity<?> clearProducts()
	{	
		List<Product> products= productsservice.retrieveProducts();
		
		for(Product product:products) {
			productsservice.deleteProduct(product.getId());
			ResponseEntity.noContent().build();
		}
		return ResponseEntity.noContent().build();
	}
	
	
	//mist
//	@GetMapping("/total")
//	public ResponseEntity<?> getTotal()
//	{
//		return ResponseEntity.ok(productsservice.sumTotal());
//	}
}
