package com.jump.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jump.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
	
}
