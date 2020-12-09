package com.jump.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="Product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "db_id")
	private long dbID;
	
	@Column(name = "product_id")
	private long productID;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "img_url")
	private String imgUrl;
	
	@Column(name = "category")
	private String category;
	
	@Column(name = "price")
	private double price;
	
	@Column(name="count")
	private int count;
	
	@ManyToOne(targetEntity = Orders.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "id")
	@JsonBackReference
	private Orders orders;
}
