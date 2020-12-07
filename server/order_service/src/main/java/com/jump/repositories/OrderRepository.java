package com.jump.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jump.model.Orders;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Long>{

}
