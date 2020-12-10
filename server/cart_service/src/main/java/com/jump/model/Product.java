package com.jump.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="PRODUCT")
public class Product {
	
	@ManyToOne
	@JoinColumn(name="CART_ID", nullable=false)
	@JsonBackReference
	private Cart cart;
	

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Product") @SequenceGenerator(name="Product", sequenceName = "ProductGenerator")
	private Integer Id;
	
	@Column(name="PRODUCTID")
	private long productID;
	
	@Column(name="NAME")
	private String name;
	
	@Column(name="IMGURL")
	private String imgUrl;
	
	@Column(name="CATEGORY")
	private String category;
	
	@Column(name="PRICE")
	private double price;
	
	@Column(name="QTY")
	private int qty = 0;
	
	@Column(name="SUBTOTAL")
	private double subtotal;
	
	
}
