package com.jump.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="orders")
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
	private long id;
	
	@Column(name = "date")
	private LocalDate date;
	
	@Column(name = "total")
	double total;
	
	@Column(name = "customer_id")
	private long customerId;
	
	@Column(name = "shipping_id")
	private long shippingId;
	
//	@Column(name = "shipping_id")
//	private Long shippingId;
	
	@OneToMany(mappedBy = "orders", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Product> products;
	
}
