package com.jump.controller;

import java.net.URI;

import com.jump.exception.ShippingInfoMismatchException;
import com.jump.model.Orders;
import com.jump.model.ShippingInfo;
import com.jump.service.OrderService;
import com.jump.service.ShippingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class ShippingController {
    
    @Autowired
    ShippingService shippingService;

    @Autowired
    OrderService orderService;

    @GetMapping(value = "/{shippingId}")
    public ShippingInfo findByShippingId(@PathVariable long shippingId){
        return shippingService.findShippingInfo(shippingId);
    }

    @PutMapping(value = "/{shippingId}")
    public ShippingInfo updateShippingInfo(@PathVariable long shippingId, @RequestBody ShippingInfo shippingInfo){

        if(shippingId == shippingInfo.getShippingId()){
            return shippingService.updateShippingInfo(shippingInfo);
        }else{
            throw new ShippingInfoMismatchException();
        }
    }

    @PostMapping
    public ResponseEntity<ShippingInfo> save(@RequestBody ShippingInfo shippingInfo){
        ShippingInfo result = shippingService.addShippingInfo(shippingInfo);
        Orders order = new Orders();
        order.setShippingId(shippingInfo.getShippingId());
        Orders orderResult = orderService.createOrder(order);
        shippingInfo.setOrderId(orderResult.getId());
        shippingService.updateShippingInfo(shippingInfo);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{shippingId}")
            .buildAndExpand(result.getShippingId())
            .toUri();
        return ResponseEntity.created(location).body(result);
    }
}
