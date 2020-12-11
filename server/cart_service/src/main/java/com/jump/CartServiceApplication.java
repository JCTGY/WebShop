package com.jump;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import com.jump.model.Product;

@SpringBootApplication
@EnableEurekaClient
public class CartServiceApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(CartServiceApplication.class, args);
	}

}
