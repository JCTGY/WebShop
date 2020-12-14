package com.jump.controller.advice;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.jump.exception.ProductIdNotMatchException;
import com.jump.exception.ProductNotFoundException;
import com.jump.exception.ProductPageNotFoundException;

@RestControllerAdvice
public class ProductControllerAdvice {

	@ExceptionHandler(ProductNotFoundException.class)
	public ResponseEntity<?> handelProductNotFound(ProductNotFoundException e) {
		ExceptionResponse response = 
				new ExceptionResponse("Cannot found this Product", "Product-404", new Date());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> handleValidationErrors(MethodArgumentNotValidException e) {
		ExceptionResponse response = 
				new ExceptionResponse(e.getBindingResult().getAllErrors().size() + 
						" Validation Error(s) Found! : " + 
						e.getBindingResult().getAllErrors(), "Product-400", new Date());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
	}
	
	@ExceptionHandler(ProductIdNotMatchException.class)
	public ResponseEntity<?> handelProductIdNotMatch(ProductIdNotMatchException e) {
		ExceptionResponse response = 
				new ExceptionResponse("ProductId not match the body", "Product-404", new Date());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
	}
	
	@ExceptionHandler(ProductPageNotFoundException.class)
	public ResponseEntity<?> handelProductPageNotMatch(ProductPageNotFoundException e) {
		ExceptionResponse response = 
				new ExceptionResponse("Product Page not Found", "Product-404", new Date());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
	}
}
