package com.jump.repository;

import com.jump.model.ShippingInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingRepository extends JpaRepository<ShippingInfo, Long> {
    
}
