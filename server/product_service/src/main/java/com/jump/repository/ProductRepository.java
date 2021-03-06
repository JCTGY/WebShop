package com.jump.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jump.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	public Optional<Product> findByName(String name);
	public List<Product> findAllByCategory(String category);
	public List<Product> findByNameContainingIgnoreCase(String name, Pageable page);
}
