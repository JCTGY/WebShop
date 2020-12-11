package com.jump.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jump.exception.CustomerNotFoundException;
import com.jump.exception.CustomerPasswordNotMatchException;
import com.jump.exception.UserNameAlreadyExistException;
import com.jump.model.Cart;
import com.jump.model.Customer;
import com.jump.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired 
	CartService cartService;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	
	public List<Customer> getAllCustomer() {
		return customerRepository.findAll();
	}
	
	public Customer getCustomerById(Long customerId) {
		return customerRepository.findById(customerId)
				.orElseThrow(CustomerNotFoundException::new);
	}
	
	public Customer getCustomerByUserName(String userName) {
		return customerRepository.findByUserName(userName)
				.orElseThrow(CustomerNotFoundException::new);
	}
	
	public Customer authCustomer(Customer customer) {
		Customer customerFromDb = getCustomerByUserName(customer.getUserName());
		if (passwordEncoder
				.matches(customer.getPassword(), customerFromDb.getPassword())) {
			customerFromDb.setPassword(null);
			return customerFromDb;
		} else throw new CustomerPasswordNotMatchException();
	}
	
	public Customer addCustomer(Customer customer) {
		if (customerRepository.existsCustomerByUserName(customer.getUserName())) 
			throw new UserNameAlreadyExistException();
		customer.setPassword(passwordEncoder.encode(customer.getPassword()));
		Cart cart = cartService.createCart(new Cart());
		customer.setCartId(cart.getCartId());
		System.out.println("add customer: " + customer);
		return customerRepository.save(customer);
	}
	
	public Customer updateCustomer(Customer customer) {
		getCustomerById(customer.getCustomerId());
		return customerRepository.save(customer);
	}
	
	public void removeCustomerById(Long customerId) {
		getCustomerById(customerId);
		customerRepository.deleteById(customerId);
	}
}
