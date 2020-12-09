package com.jump.model;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class Orders implements Serializable{
    
    /**
	 *
	 */
	private static final long serialVersionUID = 3292226831852029949L;

	Long id;
	
	LocalDate date;
	
	Double total;
	
	Long trackingID;
	
}
