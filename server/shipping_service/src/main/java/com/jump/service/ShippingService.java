package com.jump.service;

import com.jump.exception.ShippingInfoNotFoundException;
import com.jump.model.ShippingInfo;
import com.jump.repository.ShippingRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShippingService {
        
        @Autowired
        ShippingRepository shippingRepo;

        public ShippingInfo findShippingInfo(long shippingId) {
                return shippingRepo.findById(shippingId).orElseThrow(ShippingInfoNotFoundException::new);
        }

        public ShippingInfo updateShippingInfo(ShippingInfo shippingInfo) {
                findShippingInfo(shippingInfo.getShippingId());
                return shippingRepo.save(shippingInfo);
        }

        public ShippingInfo addShippingInfo(ShippingInfo shippingInfo) {
                return shippingRepo.save(shippingInfo);

        }
        
        public ShippingInfo findShippingInfoByCustomerId(long customerId) {
        	List<ShippingInfo> shippingList = shippingRepo.findAllByCustomerId(customerId);
        	if (shippingList.size() > 0) return shippingList.get(shippingList.size()-1);
        	else return null;
        }
}
