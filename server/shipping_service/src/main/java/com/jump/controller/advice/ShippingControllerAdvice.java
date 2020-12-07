package com.jump.controller.advice;

import com.jump.exception.ShippingInfoMismatchException;
import com.jump.exception.ShippingInfoNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ShippingControllerAdvice {
    

    @ExceptionHandler(ShippingInfoNotFoundException.class)
    public ResponseEntity<?> handleShippingInfoNotFound(ShippingInfoNotFoundException e){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Shipping Info Not Found");
    }

    @ExceptionHandler(ShippingInfoMismatchException.class)
    public ResponseEntity<?> handleShippingInfoMismatch(ShippingInfoMismatchException e){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Shipping Info Mismatch");
    }
}
