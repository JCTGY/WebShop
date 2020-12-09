package com.jump.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="customer")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long customerId;
	
	@Column(name="user_name")
	@NotNull
	@NotEmpty
	private String userName;
	
	@Column(name="password")
	@NotNull
	@NotEmpty
	private String password;
	
	@Column(name="first_name")
	@NotNull
	@NotEmpty
	private String firstName;
	
	@Column(name="last_name")
	@NotNull
	@NotEmpty
	private String lastName;
	
	@Column(name="cart_id")
	private Long cartId;
}
