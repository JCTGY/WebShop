package com.jump.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.jump.model.ShippingInfo;

@FeignClient(name = "shipping-service")
public interface ShippingService {

    @GetMapping("/customerId/{customerId}")
    public ShippingInfo findByCustomerId(@PathVariable Long customerId);
}
