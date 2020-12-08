package com.jump.controller.advice;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.jump.exceptions.*;

@RestControllerAdvice
public class OrderControllerAdvice {

	@ExceptionHandler(OrderNotFoundException.class)
	public ResponseEntity<ExceptionResponse> handleTodoNotFound(OrderNotFoundException e)
	{
		ExceptionResponse response = new ExceptionResponse("Order Not Found", "ORDER-404", new Date());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
	}
	
	@ExceptionHandler(OrderIdMismatchException.class)
	public ResponseEntity<ExceptionResponse> handleTodoIDMismatch(OrderIdMismatchException e)
	{
		ExceptionResponse response = new ExceptionResponse("ID in path and Order body don't match", "ORDER-400", new Date());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ExceptionResponse> handleValidationErrors(MethodArgumentNotValidException e)
	{
		System.out.println(e.getBindingResult().getAllErrors());
		
		ExceptionResponse response = new ExceptionResponse(e.getBindingResult().getAllErrors().size()+" Validation Error(s) Found! \\n" + e.getBindingResult().getAllErrors(), "ORDER-400", new Date());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
	}
}
