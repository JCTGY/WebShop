package com.jump;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import de.codecentric.boot.admin.server.config.EnableAdminServer;

@SpringBootApplication
@EnableAdminServer
public class ActuatoradminApplication {

	public static void main(String[] args) {
		SpringApplication.run(ActuatoradminApplication.class, args);
	}

}
