package com.jump.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.URL;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "name")
	@NotNull
	@NotEmpty
	private String name;
	
	@Column(name = "description")
	@NotNull
	@NotEmpty
	private String description;
	
	@Column(name = "img_url")
	@URL
	private String imgUrl;
	
	@Column(name = "category")
	@NotNull
	@NotEmpty
	private String category;
	
	@Column(name = "price")
	@NotNull
	private double price;
}
