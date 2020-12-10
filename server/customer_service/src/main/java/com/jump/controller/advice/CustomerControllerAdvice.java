package com.jump.controller.advice;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.jump.exception.CustomerIdNotMatchException;
import com.jump.exception.CustomerNotFoundException;
import com.jump.exception.CustomerPasswordNotMatchException;

@RestControllerAdvice
public class CustomerControllerAdvice {

	@ExceptionHandler(CustomerNotFoundException.class)
	public ResponseEntity<?> handelCustomerNotFound(CustomerNotFoundException e) {
		ExceptionResponse response = new ExceptionResponse("Cannot Not Fount the customer", "CUSTOMER-400", new Date());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
	}
	
	@ExceptionHandler(CustomerIdNotMatchException.class)
	public ResponseEntity<?> handelCustomerIdNotMatch(CustomerIdNotMatchException e) {
		ExceptionResponse response = new ExceptionResponse("Customer Id not match", "CUSTOM-400", new Date());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
	}
	
	@ExceptionHandler(CustomerPasswordNotMatchException.class)
	public ResponseEntity<?> handelCustomerPasswordNotMatch(CustomerPasswordNotMatchException e) {
		ExceptionResponse response = new ExceptionResponse("Customer password not match", "CUSTOM-400", new Date());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
	}
}
