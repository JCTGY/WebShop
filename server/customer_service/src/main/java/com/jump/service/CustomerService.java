package com.jump.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.exception.CustomerNotFoundException;
import com.jump.model.Customer;
import com.jump.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository customerRepository;
	
	public List<Customer> getAllCustomer() {
		return customerRepository.findAll();
	}
	
	public Customer getCustomerById(Long customerId) {
		return customerRepository.findById(customerId)
				.orElseThrow(CustomerNotFoundException::new);
	}
	
	public Customer addCustomer(Customer customer) {
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
