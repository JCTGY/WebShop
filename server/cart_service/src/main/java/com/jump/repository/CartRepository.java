package com.jump.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jump.model.Product;

@Repository
public interface CartRepository extends JpaRepository<Product, Integer> {

}
