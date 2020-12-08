package com.jump.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product {

	@Id
	@GeneratedValue
	private int id;
	
	private long productID;
	
	private String name;
	
	private String imgUrl;
	
	private String category;
	
	private double price;
	
	private int count = 0;
	
	private double total;
	
	
}
