package com.jump.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jump.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
