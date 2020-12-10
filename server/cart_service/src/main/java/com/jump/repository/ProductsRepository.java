package com.jump.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jump.model.Cart;
import com.jump.model.Product;
//import com.jump.model.Product;

@Repository
public interface ProductsRepository extends JpaRepository<Product, Integer> {

}
