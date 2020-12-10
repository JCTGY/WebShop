package com.jump.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.data.jpa.repository.Query;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="CART")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Cart") @SequenceGenerator(name="Cart", sequenceName = "CartGenerator")
	@Column(name="CART_ID")
	private Integer cartId;
	
	
	@OneToMany(
			mappedBy = "cart",
			cascade = CascadeType.ALL,
			fetch = FetchType.LAZY
			)
	private List<Product> products = new ArrayList<Product>();
	
	@Column(name="SUBTOTAL")
	private double total=0;
	
}
