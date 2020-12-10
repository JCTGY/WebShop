package com.jump.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.jump.exception.CustomerIdNotMatchException;
import com.jump.model.Customer;
import com.jump.service.CustomerService;

@RestController
@RequestMapping("/")
public class CustomerController {

	@Autowired
	CustomerService customerService;
	
	
	@GetMapping
	public ResponseEntity<List<Customer>> findAllCutomers() {
		return ResponseEntity.ok(customerService.getAllCustomer());
	}
	
	@GetMapping("/{customerId}")
	public ResponseEntity<Customer> findCustomerById(@PathVariable Long customerId) {
		return ResponseEntity.ok(customerService.getCustomerById(customerId));
	}
	
	@PostMapping("/signIn")
	public ResponseEntity<Customer> signIn(@Valid @RequestBody Customer customer) {
		return ResponseEntity.ok(customerService.authCustomer(customer));
	}
	
	@PostMapping("/signUp")
	public ResponseEntity<Customer> addCustomer(@Valid @RequestBody Customer customer) {
		System.out.println(customer);
		Customer result = customerService.addCustomer(customer);
		result.setPassword(null);
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(result.getCustomerId())
				.toUri();
		return ResponseEntity.created(location).body(result);
	}
	
	@PutMapping("/{customerId}")
	public ResponseEntity<?> updateCustomer(@PathVariable Long customerId, @Valid @RequestBody Customer customer) {
		if (customerId == customer.getCustomerId()) {
			customerService.addCustomer(customer);
			return ResponseEntity.ok("Customer update");
		} else throw new CustomerIdNotMatchException();
	}
	
	@DeleteMapping("/{customerId}")
	public void deleteCustomer(@PathVariable Long customerId) {
		customerService.removeCustomerById(customerId);
	}
	
}
